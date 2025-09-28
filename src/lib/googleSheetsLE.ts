
import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
  credentials: {
    type: "service_account",
    project_id: process.env.GOOGLE_PROJECT_ID,
    private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    client_id: process.env.GOOGLE_CLIENT_ID,
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

export class GoogleSheetsLineaEticaService {
  private spreadsheetId: string;

  constructor(spreadsheetId: string) {
    this.spreadsheetId = spreadsheetId;
  }

  // Crear hoja para un mes específico
  async createMonthSheet(year: number, month: number): Promise<void> {
    const monthNames = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    
    const sheetName = `${monthNames[month - 1]} ${year}`;

    try {
      const response = await sheets.spreadsheets.get({
        spreadsheetId: this.spreadsheetId,
      });

      const sheetExists = response.data.sheets?.some(
        sheet => sheet.properties?.title === sheetName
      );

      if (!sheetExists) {
        await sheets.spreadsheets.batchUpdate({
          spreadsheetId: this.spreadsheetId,
          requestBody: {
            requests: [
              {
                addSheet: {
                  properties: {
                    title: sheetName,
                  },
                },
              },
            ],
          },
        });

        await this.addHeaders(sheetName);
      }
    } catch (error) {
      console.error('Error creando hoja de Línea Ética:', error);
      throw error;
    }
  }

  // Headers específicos para Línea Ética
  private async addHeaders(sheetName: string): Promise<void> {
    const headers = [
      'N° LE',
      'Tipo Reporte',
      'Es Anónimo',
      'Fecha Incidente',
      'Lugar',
      'Personas Involucradas',
      'Relación Hechos',
      'Detalles Adicionales',
      'Tiene Pruebas',
      'Descripción Pruebas',
      'Sugerencia Prevención',
      'Sugerencia Corrección',
      'Nombre Reportante',
      'Cargo',
      'Área',
      'Teléfono',
      'Email',
      'Fecha Envío',
      'Estado',
      'Fecha Creación'
    ];

    await sheets.spreadsheets.values.update({
      spreadsheetId: this.spreadsheetId,
      range: `${sheetName}!A1:T1`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [headers],
      },
    });

    // Formatear headers con colores de Línea Ética
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: this.spreadsheetId,
      requestBody: {
        requests: [
          {
            repeatCell: {
              range: {
                sheetId: await this.getSheetId(sheetName),
                startRowIndex: 0,
                endRowIndex: 1,
              },
              cell: {
                userEnteredFormat: {
                  backgroundColor: { red: 0.2, green: 0.2, blue: 0.6 }, // Azul para Línea Ética
                  textFormat: {
                    foregroundColor: { red: 1, green: 1, blue: 1 },
                    bold: true,
                  },
                },
              },
              fields: 'userEnteredFormat(backgroundColor,textFormat)',
            },
          },
        ],
      },
    });
  }

  private async getSheetId(sheetName: string): Promise<number> {
    const response = await sheets.spreadsheets.get({
      spreadsheetId: this.spreadsheetId,
    });

    const sheet = response.data.sheets?.find(
      s => s.properties?.title === sheetName
    );

    return sheet?.properties?.sheetId || 0;
  }

  // Guardar registro de Línea Ética
  async saveLineaEticaRecord(lineaEticaData: any): Promise<void> {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    await this.createMonthSheet(year, month);

    const monthNames = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    
    const sheetName = `${monthNames[month - 1]} ${year}`;

    const rowData = [
      lineaEticaData.numeroLE,
      lineaEticaData.tipoReporte,
      lineaEticaData.esAnonimo ? 'SÍ' : 'NO',
      lineaEticaData.fecha,
      lineaEticaData.lugar,
      lineaEticaData.personas,
      lineaEticaData.relacionHechos,
      lineaEticaData.detallesAdicionales,
      lineaEticaData.tienePruebas,
      lineaEticaData.descripcionPruebas,
      lineaEticaData.sugerenciaPrevencion,
      lineaEticaData.sugerenciaCorreccion,
      lineaEticaData.esAnonimo ? 'ANÓNIMO' : lineaEticaData.nombre,
      lineaEticaData.cargo,
      lineaEticaData.area,
      lineaEticaData.esAnonimo ? 'N/A' : lineaEticaData.telefono,
      lineaEticaData.esAnonimo ? 'N/A' : lineaEticaData.email,
      lineaEticaData.fechaEnvio,
      'RECIBIDO',
      new Date().toLocaleString('es-CO')
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: this.spreadsheetId,
      range: `${sheetName}!A:T`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [rowData],
      },
    });
  }

  async getMonthStats(year: number, month: number): Promise<any> {
    const monthNames = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    
    const sheetName = `${monthNames[month - 1]} ${year}`;

    try {
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: this.spreadsheetId,
        range: `${sheetName}!A:T`,
      });

      const rows = response.data.values || [];
      
      if (rows.length <= 1) {
        return { total: 0, porTipo: {}, porAnonimo: { anonimos: 0, identificados: 0 } };
      }

      const porTipo: { [key: string]: number } = {};
      let anonimos = 0;
      let identificados = 0;

      for (let i = 1; i < rows.length; i++) {
        const tipo = rows[i][1] || 'SIN CLASIFICAR';
        const esAnonimo = rows[i][2] === 'SÍ';
        
        porTipo[tipo] = (porTipo[tipo] || 0) + 1;
        
        if (esAnonimo) {
          anonimos++;
        } else {
          identificados++;
        }
      }

      return {
        total: rows.length - 1,
        porTipo,
        porAnonimo: { anonimos, identificados },
        mes: sheetName
      };
    } catch (error) {
      return { 
        total: 0, 
        porTipo: {}, 
        porAnonimo: { anonimos: 0, identificados: 0 },
        error: 'Hoja no encontrada' 
      };
    }
  }
}