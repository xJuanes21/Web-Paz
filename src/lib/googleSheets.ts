// 1. Instala las dependencias necesarias:
// npm install googleapis

// 2. Crea el archivo lib/googleSheets.ts
import { google } from 'googleapis';

// Configuración de Google Sheets
const auth = new google.auth.GoogleAuth({
<<<<<<< HEAD
  credentials: {
    type: "service_account",
    project_id: process.env.GOOGLE_PROJECT_ID,
    private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    client_id: process.env.GOOGLE_CLIENT_ID,
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
=======
    credentials: {
        type: "service_account",
        project_id: process.env.GOOGLE_PROJECT_ID,
        private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_CLIENT_ID,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
>>>>>>> b2df4f79080aa8c0172adcd66635d466a138076b
});

const sheets = google.sheets({ version: 'v4', auth });

export class GoogleSheetsService {
<<<<<<< HEAD
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
      // Verificar si la hoja ya existe
      const response = await sheets.spreadsheets.get({
        spreadsheetId: this.spreadsheetId,
      });

      const sheetExists = response.data.sheets?.some(
        sheet => sheet.properties?.title === sheetName
      );

      if (!sheetExists) {
        // Crear nueva hoja
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

        // Agregar headers
        await this.addHeaders(sheetName);
      }
    } catch (error) {
      console.error('Error creando hoja:', error);
      throw error;
    }
  }

  // Agregar headers a la hoja
  private async addHeaders(sheetName: string): Promise<void> {
    const headers = [
      'N° PQRS',
      'Tipo',
      'Fecha Recepción',
      'Nombre',
      'Teléfono',
      'Correo',
      'Dirección',
      'Descripción',
      'Medio Recepción',
      'Estado',
      'Fecha Creación'
    ];

    await sheets.spreadsheets.values.update({
      spreadsheetId: this.spreadsheetId,
      range: `${sheetName}!A1:K1`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [headers],
      },
    });

    // Formatear headers
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
                  backgroundColor: { red: 0.34, green: 0.10, blue: 0.09 }, // #561A16
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

  // Obtener ID de la hoja
  private async getSheetId(sheetName: string): Promise<number> {
    const response = await sheets.spreadsheets.get({
      spreadsheetId: this.spreadsheetId,
    });

    const sheet = response.data.sheets?.find(
      s => s.properties?.title === sheetName
    );

    return sheet?.properties?.sheetId || 0;
  }

  // Guardar registro PQRS
  async savePQRSRecord(pqrsData: any): Promise<void> {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    // Asegurar que existe la hoja del mes
    await this.createMonthSheet(year, month);

    const monthNames = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    
    const sheetName = `${monthNames[month - 1]} ${year}`;

    // Preparar datos para insertar
    const rowData = [
      pqrsData.numeroPQRS,
      pqrsData.tipoPQRS,
      pqrsData.fechaRecepcion,
      pqrsData.nombre,
      pqrsData.telefono,
      pqrsData.correo,
      pqrsData.direccion,
      pqrsData.descripcion,
      pqrsData.medioRecepcion,
      'PENDIENTE',
      new Date().toLocaleString('es-CO')
    ];

    // Insertar datos
    await sheets.spreadsheets.values.append({
      spreadsheetId: this.spreadsheetId,
      range: `${sheetName}!A:K`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [rowData],
      },
    });
  }

  // Obtener estadísticas del mes
  async getMonthStats(year: number, month: number): Promise<any> {
    const monthNames = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    
    const sheetName = `${monthNames[month - 1]} ${year}`;

    try {
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: this.spreadsheetId,
        range: `${sheetName}!A:K`,
      });

      const rows = response.data.values || [];
      
      if (rows.length <= 1) {
        return { total: 0, porTipo: {} };
      }

      // Contar por tipo (excluyendo header)
      const porTipo: { [key: string]: number } = {};
      for (let i = 1; i < rows.length; i++) {
        const tipo = rows[i][1] || 'SIN CLASIFICAR';
        porTipo[tipo] = (porTipo[tipo] || 0) + 1;
      }

      return {
        total: rows.length - 1, // Excluir header
        porTipo,
        mes: sheetName
      };
    } catch (error) {
      return { total: 0, porTipo: {}, error: 'Hoja no encontrada' };
    }
  }
}
=======
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
            // Verificar si la hoja ya existe
            const response = await sheets.spreadsheets.get({
                spreadsheetId: this.spreadsheetId,
            });

            const sheetExists = response.data.sheets?.some(
                sheet => sheet.properties?.title === sheetName
            );

            if (!sheetExists) {
                // Crear nueva hoja
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

                // Agregar headers
                await this.addHeaders(sheetName);
            }
        } catch (error) {
            console.error('Error creando hoja:', error);
            throw error;
        }
    }

    // Agregar headers a la hoja
    private async addHeaders(sheetName: string): Promise<void> {
        const headers = [
            'N° PQRS',
            'Tipo',
            'Fecha Recepción',
            'Nombre',
            'Teléfono',
            'Correo',
            'Dirección',
            'Descripción',
            'Medio Recepción',
            'Estado',
            'Fecha Creación'
        ];

        await sheets.spreadsheets.values.update({
            spreadsheetId: this.spreadsheetId,
            range: `${sheetName}!A1:K1`,
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [headers],
            },
        });

        // Formatear headers
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
                                    backgroundColor: { red: 0.34, green: 0.10, blue: 0.09 }, // #561A16
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

    // Obtener ID de la hoja
    private async getSheetId(sheetName: string): Promise<number> {
        const response = await sheets.spreadsheets.get({
            spreadsheetId: this.spreadsheetId,
        });

        const sheet = response.data.sheets?.find(
            s => s.properties?.title === sheetName
        );

        return sheet?.properties?.sheetId || 0;
    }

    // Guardar registro PQRS
    async savePQRSRecord(pqrsData: any): Promise<void> {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;

        // Asegurar que existe la hoja del mes
        await this.createMonthSheet(year, month);

        const monthNames = [
            'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
        ];

        const sheetName = `${monthNames[month - 1]} ${year}`;

        // Preparar datos para insertar
        const rowData = [
            pqrsData.numeroPQRS,
            pqrsData.tipo,
            pqrsData.fechaRecepcion,
            pqrsData.nombre,
            pqrsData.telefono,
            pqrsData.email,
            pqrsData.direccion,
            pqrsData.descripcion,
            pqrsData.medioRecepcion,
            'PENDIENTE',
            new Date().toLocaleString('es-CO')
        ];

        // Insertar datos
        await sheets.spreadsheets.values.append({
            spreadsheetId: this.spreadsheetId,
            range: `${sheetName}!A:K`,
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [rowData],
            },
        });
    }

    // Obtener estadísticas del mes
    async getMonthStats(year: number, month: number): Promise<any> {
        const monthNames = [
            'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
        ];

        const sheetName = `${monthNames[month - 1]} ${year}`;

        try {
            const response = await sheets.spreadsheets.values.get({
                spreadsheetId: this.spreadsheetId,
                range: `${sheetName}!A:K`,
            });

            const rows = response.data.values || [];

            if (rows.length <= 1) {
                return { total: 0, porTipo: {} };
            }

            // Contar por tipo (excluyendo header)
            const porTipo: { [key: string]: number } = {};
            for (let i = 1; i < rows.length; i++) {
                const tipo = rows[i][1] || 'SIN CLASIFICAR';
                porTipo[tipo] = (porTipo[tipo] || 0) + 1;
            }

            return {
                total: rows.length - 1, // Excluir header
                porTipo,
                mes: sheetName
            };
        } catch (error) {
            return { total: 0, porTipo: {}, error: 'Hoja no encontrada' };
        }
    }
}
>>>>>>> b2df4f79080aa8c0172adcd66635d466a138076b
