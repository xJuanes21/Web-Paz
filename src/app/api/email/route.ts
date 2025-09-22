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
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Confirmación PQRS</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #333;
                background-color: #f4f4f4;
            }
            
            .email-container {
                max-width: 800px;
                margin: 20px auto;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border-radius: 15px;
                overflow: hidden;
                box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            }
            
            .header {
                background: rgba(255,255,255,0.95);
                padding: 30px;
                text-align: center;
                position: relative;
            }
            
            .header::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="%23f0f0f0" opacity="0.5"/><circle cx="30" cy="30" r="1" fill="%23e0e0e0" opacity="0.3"/><circle cx="50" cy="15" r="1" fill="%23f5f5f5" opacity="0.4"/><circle cx="70" cy="35" r="1" fill="%23e8e8e8" opacity="0.2"/><circle cx="85" cy="20" r="1" fill="%23f2f2f2" opacity="0.6"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>') repeat;
                opacity: 0.3;
                z-index: 0;
            }
            
            .logo-container {
                position: relative;
                z-index: 1;
                margin-bottom: 20px;
            }
            
            .logo {
                width: 80px;
                height: 80px;
                background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
                border-radius: 50%;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 24px;
                font-weight: bold;
                margin-bottom: 15px;
                box-shadow: 0 8px 25px rgba(0,0,0,0.15);
            }
            
            .header h1 {
                color: #2c3e50;
                font-size: 28px;
                margin-bottom: 10px;
                position: relative;
                z-index: 1;
            }
            
            .header p {
                color: #7f8c8d;
                font-size: 16px;
                position: relative;
                z-index: 1;
            }
            
            .content {
                background: white;
                padding: 40px;
                margin: 0 20px 20px 20px;
                border-radius: 15px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            }
            
            .pqrs-number {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 15px 25px;
                border-radius: 10px;
                text-align: center;
                margin-bottom: 30px;
                font-size: 18px;
                font-weight: bold;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            }
            
            .form-section {
                margin-bottom: 30px;
                background: #f8f9fa;
                padding: 25px;
                border-radius: 10px;
                border-left: 4px solid #667eea;
            }
            
            .form-section h3 {
                color: #2c3e50;
                margin-bottom: 20px;
                font-size: 18px;
                display: flex;
                align-items: center;
            }
            
            .form-section h3::before {
                content: '📋';
                margin-right: 10px;
                font-size: 20px;
            }
            
            .form-row {
                display: flex;
                flex-wrap: wrap;
                gap: 20px;
                margin-bottom: 15px;
            }
            
            .form-group {
                flex: 1;
                min-width: 200px;
            }
            
            .form-group label {
                display: block;
                font-weight: 600;
                color: #555;
                margin-bottom: 5px;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }
            
            .form-group .value {
                background: white;
                border: 2px solid #e1e8ed;
                border-radius: 8px;
                padding: 12px 15px;
                font-size: 14px;
                color: #2c3e50;
                min-height: 20px;
            }
            
            .type-badge {
                display: inline-block;
                background: linear-gradient(45deg, #56ab2f, #a8e6cf);
                color: white;
                padding: 8px 16px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: bold;
                text-transform: uppercase;
                letter-spacing: 1px;
                box-shadow: 0 3px 10px rgba(0,0,0,0.2);
            }
            
            .description-box {
                background: white;
                border: 2px solid #e1e8ed;
                border-radius: 8px;
                padding: 20px;
                min-height: 100px;
                font-size: 14px;
                line-height: 1.6;
                color: #2c3e50;
                margin-top: 10px;
            }
            
            .footer {
                background: rgba(255,255,255,0.95);
                padding: 30px;
                text-align: center;
                color: #7f8c8d;
                font-size: 14px;
                position: relative;
            }
            
            .footer::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="%23f0f0f0" opacity="0.5"/><circle cx="30" cy="30" r="1" fill="%23e0e0e0" opacity="0.3"/><circle cx="50" cy="15" r="1" fill="%23f5f5f5" opacity="0.4"/><circle cx="70" cy="35" r="1" fill="%23e8e8e8" opacity="0.2"/><circle cx="85" cy="20" r="1" fill="%23f2f2f2" opacity="0.6"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>') repeat;
                opacity: 0.3;
                z-index: 0;
            }
            
            .footer p {
                position: relative;
                z-index: 1;
                margin-bottom: 10px;
            }
            
            .footer .highlight {
                color: #667eea;
                font-weight: 600;
            }
            
            @media (max-width: 600px) {
                .email-container {
                    margin: 10px;
                }
                
                .content {
                    margin: 0 10px 10px 10px;
                    padding: 25px;
                }
                
                .form-row {
                    flex-direction: column;
                    gap: 15px;
                }
                
                .form-group {
                    min-width: 100%;
                }
                
                .header h1 {
                    font-size: 24px;
                }
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <!-- Header -->
            <div class="header">
                <div class="logo-container">
                    <img src="https://res.cloudinary.com/dfoinjxgi/image/upload/v1758582140/loguito_r3tws1.png" alt="Logo" width="80" />
                </div>
                <h1>Confirmación de PQRS</h1>
                <p>Hemos recibido su solicitud correctamente</p>
            </div>
            
            <!-- Content -->
            <div class="content">
                <div class="pqrs-number">
                    N°. PQRS: ${numeroPQRS}
                </div>
                
                <!-- Tipo de PQRS -->
                <div class="form-section">
                    <h3>Tipo de Solicitud</h3>
                    <div class="type-badge">${tipoPQRS}</div>
                </div>
                
                <!-- Datos del Solicitante -->
                <div class="form-section">
                    <h3>Datos del Solicitante</h3>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Nombre</label>
                            <div class="value">${nombre}</div>
                        </div>
                        <div class="form-group">
                            <label>Teléfono</label>
                            <div class="value">${telefono}</div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Correo Electrónico</label>
                            <div class="value">${correo}</div>
                        </div>
                        <div class="form-group">
                            <label>Dirección</label>
                            <div class="value">${direccion}</div>
                        </div>
                    </div>
                </div>
                
                <!-- Descripción -->
                <div class="form-section">
                    <h3>Descripción de la PQRS</h3>
                    <div class="description-box">
                        ${descripcion}
                    </div>
                </div>
                
                <!-- Información de Registro -->
                <div class="form-section">
                    <h3>Información de Registro</h3>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Fecha de Recepción</label>
                            <div class="value">${fechaRecepcion}</div>
                        </div>
                        <div class="form-group">
                            <label>Medio de Recepción</label>
                            <div class="value">${medioRecepcion}</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Footer -->
            <div class="footer">
                <p><strong>¡Gracias por contactarnos!</strong></p>
                <p>Su solicitud será procesada en los próximos días hábiles.</p>
                <p>Recibirá una respuesta a través del correo electrónico registrado.</p>
                <p class="highlight">Número de referencia: ${numeroPQRS}</p>
            </div>
        </div>
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
            to: "moisoocampo@gmail.com",
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