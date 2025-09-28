

// 2. Template de email para Línea Ética
const createLineaEticaEmailTemplate = (data: any = {}) => {
    return `
    <!DOCTYPE html>
        <html lang="es">
        <head>
        <meta charset="UTF-8">
        <title>Confirmación Línea Ética</title>
        <style>
            @media only screen and (max-width: 600px) {
            .content { padding: 20px !important; }
            .form-row { display: block !important; }
            .form-group { width: 100% !important; display: block !important; margin-bottom: 15px; }
            }
        </style>
        </head>
        <body style="margin:0;padding:0;background-color:#f4f4f4;font-family:Arial, sans-serif;">

        <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
            <td align="center" style="padding:20px 0;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:800px;background:linear-gradient(to bottom right,#1e3a8a,#3b82f6,#60a5fa);border-radius:15px;overflow:hidden;">
                
                <!-- HEADER -->
                <tr>
                    <td align="center" style="background:#fff;padding:30px;">
                    <img src="https://res.cloudinary.com/dfoinjxgi/image/upload/v1758582140/loguito_r3tws1.png" alt="Logo" width="80" style="margin-bottom:15px;">
                    <h1 style="color:#1e3a8a;font-size:24px;margin:0;">Confirmación de LÍNEA ÉTICA</h1>
                    <p style="color:#64748b;font-size:14px;margin:5px 0 0;">Hemos recibido su reporte correctamente</p>
                    </td>
                </tr>

                <!-- CONTENT -->
                <tr>
                    <td style="padding:30px;background:#fff;">
                    <div style="background:#1e3a8a;color:#fff;padding:15px;text-align:center;border-radius:8px;font-weight:bold;margin-bottom:20px;">
                        N°. ${data.numeroLE}
                    </div>

                    <!-- Tipo de reporte -->
                    <div style="margin-bottom:20px;">
                        <h3 style="margin:0 0 10px;font-size:16px;color:#1e3a8a;">Tipo de Reporte</h3>
                        <span style="background:#3b82f6;color:#fff;padding:8px 16px;border-radius:20px;font-size:12px;text-transform:uppercase;font-weight:bold;">${data.tipoReporte}</span>
                        ${data.esAnonimo ? '<span style="background:#ef4444;color:#fff;padding:8px 16px;border-radius:20px;font-size:12px;margin-left:10px;">ANÓNIMO</span>' : ''}
                    </div>

                    <!-- Información del incidente -->
                    <div style="margin-bottom:20px;">
                        <h3 style="margin:0 0 10px;font-size:16px;color:#1e3a8a;">Información del Incidente</h3>
                        <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="width:50%;padding:5px;">
                            <strong>Fecha</strong><br>
                            ${data.fecha}
                            </td>
                            <td style="width:50%;padding:5px;">
                            <strong>Lugar</strong><br>
                            ${data.lugar}
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding:5px;">
                            <strong>Personas Involucradas</strong><br>
                            ${data.personas}
                            </td>
                        </tr>
                        </table>
                    </div>

                    <!-- Relación de los hechos -->
                    <div style="margin-bottom:20px;">
                        <h3 style="margin:0 0 10px;font-size:16px;color:#1e3a8a;">Relación de los Hechos</h3>
                        <div style="border:1px solid #e2e8f0;padding:15px;border-radius:8px;background:#f8fafc;font-size:14px;line-height:1.5;">
                        ${data.relacionHechos}
                        </div>
                    </div>

                    ${data.detallesAdicionales ? `
                    <!-- Detalles adicionales -->
                    <div style="margin-bottom:20px;">
                        <h3 style="margin:0 0 10px;font-size:16px;color:#1e3a8a;">Detalles Adicionales</h3>
                        <div style="border:1px solid #e2e8f0;padding:15px;border-radius:8px;background:#f8fafc;font-size:14px;line-height:1.5;">
                        ${data.detallesAdicionales}
                        </div>
                    </div>
                    ` : ''}

                    ${data.tienePruebas && data.tienePruebas !== 'No' ? `
                    <!-- Pruebas -->
                    <div style="margin-bottom:20px;">
                        <h3 style="margin:0 0 10px;font-size:16px;color:#1e3a8a;">Pruebas</h3>
                        <p><strong>Tiene pruebas:</strong> ${data.tienePruebas}</p>
                        ${data.descripcionPruebas ? `<p><strong>Descripción:</strong> ${data.descripcionPruebas}</p>` : ''}
                    </div>
                    ` : ''}

                    ${!data.esAnonimo ? `
                    <!-- Datos del reportante -->
                    <div style="margin-bottom:20px;">
                        <h3 style="margin:0 0 10px;font-size:16px;color:#1e3a8a;">Datos del Reportante</h3>
                        <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="width:50%;padding:5px;">
                            <strong>Nombre</strong><br>
                            ${data.nombre}
                            </td>
                            <td style="width:50%;padding:5px;">
                            <strong>Cargo</strong><br>
                            ${data.cargo}
                            </td>
                        </tr>
                        <tr>
                            <td style="width:50%;padding:5px;">
                            <strong>Área</strong><br>
                            ${data.area}
                            </td>
                            <td style="width:50%;padding:5px;">
                            <strong>Teléfono</strong><br>
                            ${data.telefono}
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding:5px;">
                            <strong>Email</strong><br>
                            ${data.email}
                            </td>
                        </tr>
                        </table>
                    </div>
                    ` : ''}

                    <!-- Información de registro -->
                    <div style="margin-bottom:20px;">
                        <h3 style="margin:0 0 10px;font-size:16px;color:#1e3a8a;">Información de Registro</h3>
                        <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="width:50%;padding:5px;">
                            <strong>Fecha de Envío</strong><br>
                            ${data.fechaEnvio}
                            </td>
                            <td style="width:50%;padding:5px;">
                            <strong>Medio de Recepción</strong><br>
                            WEB - LÍNEA ÉTICA
                            </td>
                        </tr>
                        </table>
                    </div>
                    </td>
                </tr>

                <!-- FOOTER -->
                <tr>
                    <td align="center" style="background:#fff;padding:20px;color:#64748b;font-size:12px;">
                    <p style="margin:0;"><strong>¡Gracias por su confianza!</strong></p>
                    <p style="margin:5px 0;">Su reporte será evaluado por el equipo correspondiente.</p>
                    <p style="margin:5px 0;">La confidencialidad y anonimato están garantizados.</p>
                    <p style="margin:5px 0;color:#3b82f6;font-weight:bold;">Número de referencia: ${data.numeroLE}</p>
                    </td>
                </tr>

                </table>
            </td>
            </tr>
        </table>

        </body>
    </html>
    `;
};

import { GoogleSheetsLineaEticaService } from "@/lib/googleSheetsLE";
// 3. Endpoint de Línea Ética
// src/app/api/linea-etica/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.CR_EMAIL_USER,
        pass: process.env.CR_EMAIL_PASSWORD,
    },
});

// Usar un spreadsheet diferente para Línea Ética
const sheetsService = new GoogleSheetsLineaEticaService(process.env.GOOGLE_SPREADSHEET_ID_LINEA_ETICA!);

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const lineaEticaData = {
            ...body,
            numeroLE: `LE-${new Date().getFullYear()}-${String(Date.now()).slice(-3)}`,
        };

        try {
            await sheetsService.saveLineaEticaRecord(lineaEticaData);
            console.log('Registro de Línea Ética guardado en Google Sheets exitosamente');
        } catch (sheetsError) {
            console.error('Error guardando en Google Sheets:', sheetsError);
        }

        // Solo enviar email si no es anónimo o si específicamente se solicita
        if (!lineaEticaData.esAnonimo && lineaEticaData.email) {
            const mailOptions = {
                from: process.env.NEXT_PUBLIC_EMAIL_USER,
                to: lineaEticaData.email,
                cc: "rutaetica@colombofarmaceutica.com",
                subject: `Confirmación Línea Ética - ${lineaEticaData.numeroLE}`,
                html: createLineaEticaEmailTemplate(lineaEticaData),
            };

            await transporter.sendMail(mailOptions);
            console.log("Correo de confirmación Línea Ética enviado exitosamente");
        }

        // Siempre enviar notificación al administrador
        const adminMailOptions = {
            from: process.env.NEXT_PUBLIC_EMAIL_USER,
            to: "juanesalazar2004@gmail.com",
            cc: "rutaetica@colombofarmaceutica.com",
            subject: `Nuevo Reporte Línea Ética - ${lineaEticaData.numeroLE}`,
            html: createLineaEticaEmailTemplate(lineaEticaData),
        };

        await transporter.sendMail(adminMailOptions);

        return NextResponse.json({
            status: 201,
            message: "Reporte de Línea Ética registrado exitosamente",
            numeroLE: lineaEticaData.numeroLE,
        });
    } catch (error) {
        console.error("Error procesando reporte Línea Ética:", error);
        return NextResponse.json({
            status: 500,
            error: "Error interno del servidor",
        });
    }
}

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const year = parseInt(searchParams.get('year') || new Date().getFullYear().toString());
        const month = parseInt(searchParams.get('month') || (new Date().getMonth() + 1).toString());

        const stats = await sheetsService.getMonthStats(year, month);

        return NextResponse.json({
            status: 200,
            data: stats
        });

    } catch (error) {
        console.error('Error obteniendo estadísticas de Línea Ética:', error);
        return NextResponse.json({
            status: 500,
            error: 'Error interno del servidor'
        });
    }
}

