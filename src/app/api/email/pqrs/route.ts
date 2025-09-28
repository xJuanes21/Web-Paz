import { NextResponse } from "next/server";
import { GoogleSheetsService } from "@/lib/googleSheets";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "smtp.hostinger.com",
    port: 587,    
    secure: true,
    auth: {
        user: process.env.CR_EMAIL_USER,
        pass: process.env.CR_EMAIL_PASSWORD,
    },
});

const sheetsService = new GoogleSheetsService(process.env.GOOGLE_SPREADSHEET_ID!);

const createPQRSEmailTemplate = (data: any = {}) => {
    return `
    <!DOCTYPE html>
        <html lang="es">
        <head>
        <meta charset="UTF-8">
        <title>Confirmación PQRS</title>
        <style>
            /* Media query para móviles */
            @media only screen and (max-width: 600px) {
            .content {
                padding: 20px !important;
            }
            .form-row {
                display: block !important;
            }
            .form-group {
                width: 100% !important;
                display: block !important;
                margin-bottom: 15px;
            }
            }
        </style>
        </head>
        <body style="margin:0;padding:0;background-color:#f4f4f4;font-family:Arial, sans-serif;">

        <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
            <td align="center" style="padding:20px 0;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:800px;background:linear-gradient(to bottom right,#561A16,#C6441C,#D4741C);border-radius:15px;overflow:hidden;">
                
                <!-- HEADER -->
                <tr>
                    <td align="center" style="background:#fff;padding:30px;">
                    <img src="https://res.cloudinary.com/dfoinjxgi/image/upload/v1758582140/loguito_r3tws1.png" alt="Logo" width="80" style="margin-bottom:15px;">
                    <h1 style="color:#2c3e50;font-size:24px;margin:0;">Confirmación de PQRS</h1>
                    <p style="color:#7f8c8d;font-size:14px;margin:5px 0 0;">Hemos recibido su solicitud correctamente</p>
                    </td>
                </tr>

                <!-- CONTENT -->
                <tr>
                    <td style="padding:30px;background:#fff;">
                    <div style="background:#561A16;color:#fff;padding:15px;text-align:center;border-radius:8px;font-weight:bold;margin-bottom:20px;">
                        N°. ${data.numeroPQRS}
                    </div>

                    <!-- Tipo de solicitud -->
                    <div style="margin-bottom:20px;">
                        <h3 style="margin:0 0 10px;font-size:16px;color:#2c3e50;">Tipo de Solicitud</h3>
                        <span style="background:#C6441C;color:#fff;padding:8px 16px;border-radius:20px;font-size:12px;text-transform:uppercase;font-weight:bold;">${data.tipo}</span>
                    </div>

                    <!-- Datos solicitante -->
                    <div style="margin-bottom:20px;">
                        <h3 style="margin:0 0 10px;font-size:16px;color:#2c3e50;">Datos del Solicitante</h3>
                        <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="width:50%;padding:5px;">
                            <strong>Nombre</strong><br>
                            ${data.nombre}
                            </td>
                            <td style="width:50%;padding:5px;">
                            <strong>Teléfono</strong><br>
                            ${data.telefono}
                            </td>
                        </tr>
                        <tr>
                            <td style="width:50%;padding:5px;">
                            <strong>Correo</strong><br>
                            ${data.email}
                            </td>
                            <td style="width:50%;padding:5px;">
                            <strong>Dirección</strong><br>
                            ${data.direccion}
                            </td>
                        </tr>
                        </table>
                    </div>

                    <!-- Descripción -->
                    <div style="margin-bottom:20px;">
                        <h3 style="margin:0 0 10px;font-size:16px;color:#2c3e50;">Descripción</h3>
                        <div style="border:1px solid #ddd;padding:15px;border-radius:8px;background:#fafafa;font-size:14px;line-height:1.5;">
                        ${data.descripcion}
                        </div>
                    </div>

                    <!-- Información de registro -->
                    <div style="margin-bottom:20px;">
                        <h3 style="margin:0 0 10px;font-size:16px;color:#2c3e50;">Información de Registro</h3>
                        <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="width:50%;padding:5px;">
                            <strong>Fecha de Recepción</strong><br>
                            ${data.fechaRecepcion}
                            </td>
                            <td style="width:50%;padding:5px;">
                            <strong>Medio de Recepción</strong><br>
                            ${data.medioRecepcion}
                            </td>
                        </tr>
                        </table>
                    </div>
                    </td>
                </tr>

                <!-- FOOTER -->
                <tr>
                    <td align="center" style="background:#fff;padding:20px;color:#7f8c8d;font-size:12px;">
                    <p style="margin:0;"><strong>¡Gracias por contactarnos!</strong></p>
                    <p style="margin:5px 0;">Su solicitud será procesada en los próximos días hábiles.</p>
                    <p style="margin:5px 0;">Recibirá una respuesta en su correo electrónico.</p>
                    <p style="margin:5px 0;color:#C6441C;font-weight:bold;">Número de referencia: ${data.numeroPQRS}</p>
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

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const pqrsData = {
            ...body,
            numeroPQRS: `PQRS-${new Date().getFullYear()}-${String(Date.now()).slice(-3)}`,
        };

        try {
            await sheetsService.savePQRSRecord(pqrsData);
            console.log('Registro guardado en Google Sheets exitosamente');
        } catch (sheetsError) {
            console.error('Error guardando en Google Sheets:', sheetsError);
            // Continuar con el envío del email aunque falle Sheets
        }

        // Enviar email de confirmación
        const mailOptions = {
            from: process.env.NEXT_PUBLIC_EMAIL_USER,
            to: pqrsData.correo,
            cc: "juanesalazar2004@gmail.com", // Copia para administrador
            subject: `Confirmación PQRS - ${pqrsData.numeroPQRS}`,
            html: createPQRSEmailTemplate(pqrsData),
        };

        await transporter.sendMail(mailOptions);
        console.log("Correo de confirmación PQRS enviado exitosamente");

        return NextResponse.json({
            status: 201,
            message: "PQRS registrada y correo enviado exitosamente",
            numeroPQRS: pqrsData.numeroPQRS,
        });
    } catch (emailError) {
        console.error("Error enviando el correo:", emailError);
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
        console.error('Error obteniendo estadísticas:', error);
        return NextResponse.json({
            status: 500,
            error: 'Error interno del servidor'
        });
    }
}