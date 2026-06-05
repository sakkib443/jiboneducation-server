import nodemailer from "nodemailer";
import { LOGO_BASE64 } from "./brandLogo";

// Create transporter using Gmail SMTP
const createTransporter = () => {
    return nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS, // Use App Password for Gmail
        },
    });
};

// ──────────────────────────────────────────────────────────────────────────
// Shared brand + email building blocks (classic, professional letterhead look)
// ──────────────────────────────────────────────────────────────────────────
const BRAND = {
    name: "Jibon Education",
    tagline: "IELTS Examination System",
    teal: "#0E5C63",
    tealDark: "#0A464C",
    gold: "#C8A24B",
    ink: "#1F2A2E",
    body: "#48555B",
    muted: "#90999E",
    line: "#E6EAEC",
    panel: "#F6F8F8",
    pageBg: "#ECEFF0",
    contact: "info@jiboneducation.com",
};

// Logo is embedded inline via CID (Content-ID) attachment so it renders in every
// email client (local or production) without depending on an external image URL.
const LOGO_CID = "jibonlogo";
const logoAttachment = () => ({
    filename: "jibon-education-logo.png",
    content: Buffer.from(LOGO_BASE64, "base64"),
    cid: LOGO_CID,
});

const bandColor = (band: number) =>
    band >= 7 ? "#2E7D5B" : band >= 5 ? BRAND.teal : "#B4524A";

// White letterhead header: logo + serif wordmark + tagline + gold rule
const emailHeader = () => `
    <tr>
        <td style="background:#ffffff; padding:20px 40px 0 40px;" align="right">
            <img src="cid:${LOGO_CID}" alt="${BRAND.name}" height="34" style="display:inline-block; height:34px; width:auto; border:0; outline:none;" />
        </td>
    </tr>
    <tr>
        <td style="background:#ffffff; padding:10px 40px 0 40px; text-align:center;">
            <div style="font-family:Georgia,'Times New Roman',serif; font-size:23px; font-weight:700; letter-spacing:0.4px; color:${BRAND.teal};">${BRAND.name}</div>
            <div style="font-family:Arial,Helvetica,sans-serif; font-size:11px; letter-spacing:2.5px; text-transform:uppercase; color:${BRAND.muted}; margin-top:6px;">${BRAND.tagline}</div>
        </td>
    </tr>
    <tr>
        <td align="center" style="background:#ffffff; padding:16px 40px 0 40px;">
            <table role="presentation" cellpadding="0" cellspacing="0"><tr>
                <td style="width:54px; height:3px; background:${BRAND.gold}; font-size:0; line-height:0;">&nbsp;</td>
            </tr></table>
        </td>
    </tr>
`;

const emailFooter = () => `
    <tr>
        <td style="background:${BRAND.tealDark}; padding:26px 40px; text-align:center;">
            <div style="font-family:Georgia,'Times New Roman',serif; color:#ffffff; font-size:16px; font-weight:700; letter-spacing:0.4px;">${BRAND.name}</div>
            <div style="font-family:Arial,Helvetica,sans-serif; color:#A9C3C5; font-size:11px; letter-spacing:1.5px; text-transform:uppercase; margin-top:5px;">${BRAND.tagline}</div>
            <div style="height:1px; background:rgba(255,255,255,0.12); margin:16px auto; max-width:200px;"></div>
            <div style="font-family:Arial,Helvetica,sans-serif; color:#8FB0B2; font-size:12px; line-height:1.7;">
                For any queries, contact <a href="mailto:${BRAND.contact}" style="color:${BRAND.gold}; text-decoration:none;">${BRAND.contact}</a><br/>
                &copy; ${new Date().getFullYear()} ${BRAND.name}. All rights reserved.
            </div>
        </td>
    </tr>
`;

const emailShell = (title: string, inner: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body style="margin:0; padding:0; background:${BRAND.pageBg}; font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.pageBg};">
        <tr>
            <td align="center" style="padding:32px 12px;">
                <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px; background:#ffffff; border:1px solid ${BRAND.line}; border-radius:10px; overflow:hidden;">
                    ${emailHeader()}
                    ${inner}
                    ${emailFooter()}
                </table>
                <div style="font-family:Arial,Helvetica,sans-serif; color:${BRAND.muted}; font-size:11px; margin-top:16px;">This is an automated message from ${BRAND.name}. Please do not reply to this email.</div>
            </td>
        </tr>
    </table>
</body>
</html>`;

// A single label/value row for the detail panels
const detailRow = (label: string, value: string, isLast = false) => `
    <tr>
        <td style="padding:11px 0; ${isLast ? "" : `border-bottom:1px solid ${BRAND.line};`} font-family:Arial,Helvetica,sans-serif; font-size:13px; color:${BRAND.muted}; width:130px; vertical-align:top;">${label}</td>
        <td style="padding:11px 0; ${isLast ? "" : `border-bottom:1px solid ${BRAND.line};`} font-family:Arial,Helvetica,sans-serif; font-size:14px; text-align:right; vertical-align:top;">${value}</td>
    </tr>
`;

// ──────────────────────────────────────────────────────────────────────────
// Template: Student registration
// ──────────────────────────────────────────────────────────────────────────
const getStudentRegistrationTemplate = (data: {
    studentName: string;
    examId: string;
    email: string;
    password: string;
    examDate: string;
    loginUrl: string;
    speakingExamDate?: string;
    speakingExamTime?: string;
    speakingMeetingLink?: string;
}) => {
    const inner = `
                    <!-- Title -->
                    <tr>
                        <td style="padding:28px 40px 0 40px; text-align:center;">
                            <h1 style="margin:0; font-family:Georgia,'Times New Roman',serif; font-size:21px; font-weight:700; color:${BRAND.ink};">Registration Confirmed</h1>
                        </td>
                    </tr>

                    <!-- Greeting -->
                    <tr>
                        <td style="padding:20px 40px 0 40px;">
                            <p style="margin:0 0 14px 0; font-family:Arial,Helvetica,sans-serif; font-size:15px; color:${BRAND.ink};">Dear ${data.studentName},</p>
                            <p style="margin:0; font-family:Arial,Helvetica,sans-serif; font-size:14px; line-height:1.7; color:${BRAND.body};">
                                Your registration for the IELTS examination has been successfully completed. Your candidate login details are provided below. Please keep this information confidential, as it is required to access the examination portal.
                            </p>
                        </td>
                    </tr>

                    <!-- Credentials panel -->
                    <tr>
                        <td style="padding:24px 40px 0 40px;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${BRAND.line}; border-radius:8px; background:${BRAND.panel};">
                                <tr>
                                    <td style="padding:14px 22px; border-bottom:1px solid ${BRAND.line}; font-family:Arial,Helvetica,sans-serif; font-size:11px; letter-spacing:1.5px; text-transform:uppercase; color:${BRAND.teal}; font-weight:bold;">Candidate Login Details</td>
                                </tr>
                                <tr>
                                    <td style="padding:4px 22px 14px 22px;">
                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                                            ${detailRow("Exam ID", `<span style="font-family:'Courier New',monospace; font-weight:bold; color:${BRAND.ink}; letter-spacing:0.5px;">${data.examId}</span>`)}
                                            ${detailRow("Email", `<span style="color:${BRAND.body};">${data.email}</span>`)}
                                            ${detailRow("Password", `<span style="font-family:'Courier New',monospace; font-weight:bold; color:${BRAND.ink}; letter-spacing:0.5px;">${data.password}</span>`)}
                                            ${detailRow("Exam Date", `<span style="color:${BRAND.ink}; font-weight:bold;">${data.examDate}</span>`, true)}
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    ${data.speakingExamDate ? `
                    <!-- Speaking schedule panel -->
                    <tr>
                        <td style="padding:16px 40px 0 40px;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${BRAND.line}; border-left:3px solid ${BRAND.gold}; border-radius:8px; background:#ffffff;">
                                <tr>
                                    <td style="padding:14px 22px; border-bottom:1px solid ${BRAND.line}; font-family:Arial,Helvetica,sans-serif; font-size:11px; letter-spacing:1.5px; text-transform:uppercase; color:${BRAND.ink}; font-weight:bold;">Speaking Examination Schedule</td>
                                </tr>
                                <tr>
                                    <td style="padding:4px 22px 14px 22px;">
                                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                                            ${detailRow("Date", `<span style="color:${BRAND.ink}; font-weight:bold;">${data.speakingExamDate}</span>`, !data.speakingExamTime && !data.speakingMeetingLink)}
                                            ${data.speakingExamTime ? detailRow("Time", `<span style="color:${BRAND.ink}; font-weight:bold;">${data.speakingExamTime}</span>`, !data.speakingMeetingLink) : ""}
                                            ${data.speakingMeetingLink ? detailRow("Meeting Link", `<a href="${data.speakingMeetingLink}" style="color:${BRAND.teal}; font-weight:bold; text-decoration:underline;">Join Meeting</a>`, true) : ""}
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>` : ""}

                    <!-- CTA -->
                    <tr>
                        <td style="padding:28px 40px 4px 40px; text-align:center;">
                            <a href="${data.loginUrl}" style="display:inline-block; background:${BRAND.teal}; color:#ffffff; text-decoration:none; padding:14px 38px; border-radius:6px; font-family:Arial,Helvetica,sans-serif; font-size:14px; font-weight:bold; letter-spacing:0.5px;">Access the Examination Portal</a>
                        </td>
                    </tr>

                    <!-- Notice -->
                    <tr>
                        <td style="padding:22px 40px 32px 40px;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.panel}; border-radius:6px;">
                                <tr>
                                    <td style="padding:14px 18px; font-family:Arial,Helvetica,sans-serif; font-size:12.5px; line-height:1.6; color:${BRAND.body};">
                                        <strong style="color:${BRAND.ink};">Please note:</strong> Do not share your password with anyone. During the examination, remaining in full-screen mode is mandatory — exiting it may result in disqualification.
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
    `;
    return emailShell("IELTS Exam Registration", inner);
};

// ──────────────────────────────────────────────────────────────────────────
// Template: Result published
// ──────────────────────────────────────────────────────────────────────────
const getResultPublishedTemplate = (data: {
    studentName: string;
    examId: string;
    listeningBand: number;
    readingBand: number;
    writingBand: number;
    speakingBand: number;
    overallBand: number;
    examDate: string;
    resultUrl: string;
}) => {
    const moduleCell = (label: string, band: number) => `
        <td width="50%" style="padding:6px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${BRAND.line}; border-radius:8px; background:${BRAND.panel};">
                <tr><td style="padding:16px 12px; text-align:center;">
                    <div style="font-family:Arial,Helvetica,sans-serif; font-size:11px; letter-spacing:1.5px; text-transform:uppercase; color:${BRAND.muted}; font-weight:bold;">${label}</div>
                    <div style="font-family:Georgia,'Times New Roman',serif; font-size:30px; font-weight:700; color:${bandColor(band)}; margin-top:6px;">${band}</div>
                </td></tr>
            </table>
        </td>
    `;

    const inner = `
                    <!-- Title -->
                    <tr>
                        <td style="padding:28px 40px 0 40px; text-align:center;">
                            <h1 style="margin:0; font-family:Georgia,'Times New Roman',serif; font-size:21px; font-weight:700; color:${BRAND.ink};">Your IELTS Result</h1>
                        </td>
                    </tr>

                    <!-- Greeting -->
                    <tr>
                        <td style="padding:18px 40px 0 40px; text-align:center;">
                            <p style="margin:0 0 6px 0; font-family:Arial,Helvetica,sans-serif; font-size:15px; color:${BRAND.ink};">Dear ${data.studentName},</p>
                            <p style="margin:0; font-family:Arial,Helvetica,sans-serif; font-size:13px; color:${BRAND.muted};">Exam ID: <strong style="color:${BRAND.body};">${data.examId}</strong> &nbsp;|&nbsp; Exam Date: <strong style="color:${BRAND.body};">${data.examDate}</strong></p>
                        </td>
                    </tr>

                    <!-- Overall band -->
                    <tr>
                        <td style="padding:24px 40px 0 40px;" align="center">
                            <table role="presentation" width="240" cellpadding="0" cellspacing="0" style="background:${BRAND.teal}; border-radius:10px;">
                                <tr><td style="padding:22px 20px; text-align:center;">
                                    <div style="font-family:Arial,Helvetica,sans-serif; font-size:11px; letter-spacing:2px; text-transform:uppercase; color:#BFE0E2;">Overall Band Score</div>
                                    <div style="font-family:Georgia,'Times New Roman',serif; font-size:52px; font-weight:700; color:#ffffff; line-height:1.1; margin-top:4px;">${data.overallBand}</div>
                                </td></tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Module scores -->
                    <tr>
                        <td style="padding:18px 34px 0 34px;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    ${moduleCell("Listening", data.listeningBand)}
                                    ${moduleCell("Reading", data.readingBand)}
                                </tr>
                                <tr>
                                    ${moduleCell("Writing", data.writingBand)}
                                    ${moduleCell("Speaking", data.speakingBand)}
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- CTA -->
                    <tr>
                        <td style="padding:24px 40px 4px 40px; text-align:center;">
                            <a href="${data.resultUrl}" style="display:inline-block; background:${BRAND.teal}; color:#ffffff; text-decoration:none; padding:14px 38px; border-radius:6px; font-family:Arial,Helvetica,sans-serif; font-size:14px; font-weight:bold; letter-spacing:0.5px;">View Detailed Result</a>
                        </td>
                    </tr>

                    <!-- Closing -->
                    <tr>
                        <td style="padding:22px 40px 32px 40px; text-align:center;">
                            <p style="margin:0; font-family:Arial,Helvetica,sans-serif; font-size:13.5px; line-height:1.7; color:${BRAND.body};">
                                Thank you for choosing ${BRAND.name} for your IELTS preparation.<br/>We wish you continued success in your future endeavours.
                            </p>
                        </td>
                    </tr>
    `;
    return emailShell("IELTS Result Published", inner);
};

// Send student registration email
export const sendStudentRegistrationEmail = async (data: {
    studentName: string;
    examId: string;
    email: string;
    password: string;
    examDate: Date;
    speakingExamDate?: Date;
    speakingExamTime?: string;
    speakingMeetingLink?: string;
}) => {
    try {
        const transporter = createTransporter();
        const loginUrl = process.env.FRONTEND_URL || "https://jiboneducation.com";

        const mailOptions = {
            from: `"Jibon Education IELTS" <${process.env.EMAIL_USER}>`,
            to: data.email,
            attachments: [logoAttachment()],
            subject: `🎓 IELTS Exam Registration Successful - ${data.examId}`,
            html: getStudentRegistrationTemplate({
                studentName: data.studentName,
                examId: data.examId,
                email: data.email,
                password: data.password,
                examDate: new Date(data.examDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                }),
                loginUrl: `${loginUrl}/login`,
                speakingExamDate: data.speakingExamDate
                    ? new Date(data.speakingExamDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })
                    : undefined,
                speakingExamTime: data.speakingExamTime,
                speakingMeetingLink: data.speakingMeetingLink,
            }),
        };

        const result = await transporter.sendMail(mailOptions);
        console.log("Registration email sent successfully:", result.messageId);
        return { success: true, messageId: result.messageId };
    } catch (error) {
        console.error("Failed to send registration email:", error);
        return { success: false, error };
    }
};

// Send result published email
export const sendResultPublishedEmail = async (data: {
    studentName: string;
    examId: string;
    email: string;
    listeningBand: number;
    readingBand: number;
    writingBand: number;
    speakingBand: number;
    overallBand: number;
    examDate: Date;
}) => {
    try {
        const transporter = createTransporter();
        const resultUrl = process.env.FRONTEND_URL || "https://jiboneducation.com";

        const mailOptions = {
            from: `"Jibon Education IELTS" <${process.env.EMAIL_USER}>`,
            to: data.email,
            attachments: [logoAttachment()],
            subject: `🏆 Your IELTS Result is Ready - Overall Band ${data.overallBand}`,
            html: getResultPublishedTemplate({
                studentName: data.studentName,
                examId: data.examId,
                listeningBand: data.listeningBand,
                readingBand: data.readingBand,
                writingBand: data.writingBand,
                speakingBand: data.speakingBand,
                overallBand: data.overallBand,
                examDate: new Date(data.examDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                }),
                resultUrl: `${resultUrl}/result/${data.examId}`,
            }),
        };

        const result = await transporter.sendMail(mailOptions);
        console.log("Result email sent successfully:", result.messageId);
        return { success: true, messageId: result.messageId };
    } catch (error) {
        console.error("Failed to send result email:", error);
        return { success: false, error };
    }
};

export const EmailService = {
    sendStudentRegistrationEmail,
    sendResultPublishedEmail,
};
