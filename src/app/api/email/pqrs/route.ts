import { GoogleSheetsService } from "@/lib/googleSheets";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
    },
});

// Instancia del servicio de Google Sheets
const sheetsService = new GoogleSheetsService(process.env.GOOGLE_SPREADSHEET_ID!);

const createPQRSEmailTemplate = (data: any = {}) => {
    // Tu template existente aquí...
    const {
        numeroPQRS = "PQRS-2024-001",
        tipoPQRS = "PETICIÓN",
        nombre = "[Nombre del solicitante]",
        telefono = "[Teléfono]",
        correo = "[Correo electrónico]",
        direccion = "[Dirección]",
        descripcion = "[Descripción de la PQRS]",
        fechaRecepcion = new Date().toLocaleDateString('es-CO'),
        medioRecepcion = "CORREO"
    } = data;

    return `
    <!DOCTYPE html>
        <html lang="es">
        <head>
        <meta charset="UTF-8">
        <title>Confirmación PQRS</title>
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
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:800px;background:linear-gradient(to bottom right,#561A16,#C6441C,#D4741C);border-radius:15px;overflow:hidden;">
                <tr>
                    <td align="center" style="background:#fff;padding:30px;">
                    <img src="https://res.cloudinary.com/dfoinjxgi/image/upload/v1758582140/loguito_r3tws1.png" alt="Logo" width="80" style="margin-bottom:15px;">
                    <h1 style="color:#2c3e50;font-size:24px;margin:0;">Confirmación de LINEA ETICA</h1>
                    <p style="color:#7f8c8d;font-size:14px;margin:5px 0 0;">Hemos recibido su solicitud correctamente</p>
                    </td>
                </tr>
                <tr>
                    <td style="padding:30px;background:#fff;">
                    <div style="background:#561A16;color:#fff;padding:15px;text-align:center;border-radius:8px;font-weight:bold;margin-bottom:20px;">
                        N°. PQRS: ${numeroPQRS}
                    </div>
                    <div style="margin-bottom:20px;">
                        <h3 style="margin:0 0 10px;font-size:16px;color:#2c3e50;">Tipo de Solicitud</h3>
                        <span style="background:#C6441C;color:#fff;padding:8px 16px;border-radius:20px;font-size:12px;text-transform:uppercase;font-weight:bold;">${tipoPQRS}</span>
                    </div>
                    <div style="margin-bottom:20px;">
                        <h3 style="margin:0 0 10px;font-size:16px;color:#2c3e50;">Datos del Solicitante</h3>
                        <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="width:50%;padding:5px;"><strong>Nombre</strong><br>${nombre}</td>
                            <td style="width:50%;padding:5px;"><strong>Teléfono</strong><br>${telefono}</td>
                        </tr>
                        <tr>
                            <td style="width:50%;padding:5px;"><strong>Correo</strong><br>${correo}</td>
                            <td style="width:50%;padding:5px;"><strong>Dirección</strong><br>${direccion}</td>
                        </tr>
                        </table>
                    </div>
                    <div style="margin-bottom:20px;">
                        <h3 style="margin:0 0 10px;font-size:16px;color:#2c3e50;">Descripción</h3>
                        <div style="border:1px solid #ddd;padding:15px;border-radius:8px;background:#fafafa;font-size:14px;line-height:1.5;">
                        ${descripcion}
                        </div>
                    </div>
                    <div style="margin-bottom:20px;">
                        <h3 style="margin:0 0 10px;font-size:16px;color:#2c3e50;">Información de Registro</h3>
                        <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="width:50%;padding:5px;"><strong>Fecha de Recepción</strong><br>${fechaRecepcion}</td>
                            <td style="width:50%;padding:5px;"><strong>Medio de Recepción</strong><br>${medioRecepcion}</td>
                        </tr>
                        </table>
                    </div>
                    </td>
                </tr>
                <tr>
                    <td align="center" style="background:#fff;padding:20px;color:#7f8c8d;font-size:12px;">
                    <p style="margin:0;"><strong>¡Gracias por contactarnos!</strong></p>
                    <p style="margin:5px 0;">Su solicitud será procesada en los próximos días hábiles.</p>
                    <p style="margin:5px 0;">Recibirá una respuesta en su correo electrónico.</p>
                    <p style="margin:5px 0;color:#C6441C;font-weight:bold;">Número de referencia: ${numeroPQRS}</p>
                    </td>
                </tr>
                </table>
            </td>
            </tr>
        </table>
        </body>
    </html>`;
};

export async function POST(request: Request) {
    try {
        // Extraer datos del request
        const body = await request.json();
        const pqrsData = body.pqrsData || {
            numeroPQRS: `PQRS-${new Date().getFullYear()}-${String(Date.now()).slice(-3)}`,
            tipoPQRS: "PETICIÓN",
            nombre: "Juan Pérez García",
            telefono: "+57 300 123 4567",
            correo: "juan.perez@email.com",
            direccion: "Calle 123 #45-67, Bogotá",
            descripcion: "Solicito información sobre los servicios disponibles y sus respectivos costos.",
            fechaRecepcion: new Date().toLocaleDateString('es-CO'),
            medioRecepcion: "CORREO ELECTRÓNICO"
        };

        // Guardar en Google Sheets
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
        console.log('Correo de confirmación PQRS enviado exitosamente');

        return NextResponse.json({
            status: 201,
            message: 'PQRS registrada, guardada en Google Sheets y correo enviado exitosamente',
            numeroPQRS: pqrsData.numeroPQRS
        });

    } catch (error) {
        console.error('Error procesando PQRS:', error);
        return NextResponse.json({
            status: 500,
            error: 'Error interno del servidor'
        });
    }
}

// 4. Crear endpoint para estadísticas (api/pqrs/stats/route.ts)
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