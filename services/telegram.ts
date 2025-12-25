
interface TelegramData {
    name: string;
    phone: string;
    email?: string;
    school?: string;
    message?: string;
}

export const sendMessageToTelegram = async (data: TelegramData): Promise<boolean> => {
    const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
        console.error('Telegram Token or Chat ID is missing');
        return false;
    }

    const text = `
🚀 <b>Yangi Ariza (AI HERO):</b>

👤 <b>Ism:</b> ${data.name}
🏫 <b>Maktab:</b> ${data.school || 'Kiritilmagan'}
📞 <b>Tel:</b> ${data.phone}
📧 <b>Email:</b> ${data.email || 'Kiritilmagan'}

💬 <b>Xabar:</b> 
${data.message || 'Xabar yo\'q'}
  `;

    try {
        const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: text,
                parse_mode: 'HTML',
            }),
        });

        return response.ok;
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
        return false;
    }
};
