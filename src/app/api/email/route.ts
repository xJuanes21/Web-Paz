import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
    },
});

const createPQRSEmailTemplate = (data: any = {}) => {
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
                        N°. PQRS: PQRS-2024-001
                    </div>

                    <!-- Tipo de solicitud -->
                    <div style="margin-bottom:20px;">
                        <h3 style="margin:0 0 10px;font-size:16px;color:#2c3e50;">Tipo de Solicitud</h3>
                        <span style="background:#C6441C;color:#fff;padding:8px 16px;border-radius:20px;font-size:12px;text-transform:uppercase;font-weight:bold;">PETICIÓN</span>
                    </div>

                    <!-- Datos solicitante -->
                    <div style="margin-bottom:20px;">
                        <h3 style="margin:0 0 10px;font-size:16px;color:#2c3e50;">Datos del Solicitante</h3>
                        <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="width:50%;padding:5px;">
                            <strong>Nombre</strong><br>
                            Juan Pérez
                            </td>
                            <td style="width:50%;padding:5px;">
                            <strong>Teléfono</strong><br>
                            +57 300 123 4567
                            </td>
                        </tr>
                        <tr>
                            <td style="width:50%;padding:5px;">
                            <strong>Correo</strong><br>
                            juan.perez@email.com
                            </td>
                            <td style="width:50%;padding:5px;">
                            <strong>Dirección</strong><br>
                            Calle 123 #45-67, Bogotá
                            </td>
                        </tr>
                        </table>
                    </div>

                    <!-- Descripción -->
                    <div style="margin-bottom:20px;">
                        <h3 style="margin:0 0 10px;font-size:16px;color:#2c3e50;">Descripción</h3>
                        <div style="border:1px solid #ddd;padding:15px;border-radius:8px;background:#fafafa;font-size:14px;line-height:1.5;">
                        Solicito información sobre los servicios disponibles y sus respectivos costos.
                        </div>
                    </div>

                    <!-- Información de registro -->
                    <div style="margin-bottom:20px;">
                        <h3 style="margin:0 0 10px;font-size:16px;color:#2c3e50;">Información de Registro</h3>
                        <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="width:50%;padding:5px;">
                            <strong>Fecha de Recepción</strong><br>
                            23/09/2025
                            </td>
                            <td style="width:50%;padding:5px;">
                            <strong>Medio de Recepción</strong><br>
                            CORREO ELECTRÓNICO
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
                    <p style="margin:5px 0;color:#C6441C;font-weight:bold;">Número de referencia: PQRS-2024-001</p>
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
        // Aquí puedes extraer los datos del request cuando los tengas
        // const body = await request.json();
        // const pqrsData = body.pqrsData;

        // Por ahora usamos datos de ejemplo
        const pqrsData = {
            numeroPQRS: `PQRS-${new Date().getFullYear()}-${String(Date.now()).slice(-3)}`,
            tipoPQRS: "PETICIÓN",
            nombre: "Juan Pérez García",
            telefono: "+57 300 123 4567",
            correo: "juan.perez@email.com",
            direccion: "Calle 123 #45-67, Bogotá",
            descripcion: "Solicito información sobre los servicios disponibles y sus respectivos costos. Estoy interesado en conocer más detalles sobre los planes y beneficios que ofrecen.",
            fechaRecepcion: new Date().toLocaleDateString('es-CO'),
            medioRecepcion: "CORREO ELECTRÓNICO"
        };

        const mailOptions = {
            from: process.env.NEXT_PUBLIC_EMAIL_USER,
            to: "juanesalazar2004@gmail.com",
            subject: `Confirmación PQRS - ${pqrsData.numeroPQRS}`,
            html: createPQRSEmailTemplate(pqrsData),
        };

        await transporter.sendMail(mailOptions);
        console.log('Correo de confirmación PQRS enviado exitosamente');

        return NextResponse.json({
            status: 201,
            message: 'PQRS registrada y correo enviado exitosamente',
            numeroPQRS: pqrsData.numeroPQRS
        });

    } catch (emailError) {
        console.error('Error enviando el correo:', emailError);
        return NextResponse.json({
            status: 500,
            error: 'Error interno del servidor'
        });
    }
}