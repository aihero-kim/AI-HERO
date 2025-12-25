
import React, { useState } from 'react';
import { Send, CheckCircle, ArrowRight, AlertCircle, Loader2 } from 'lucide-react';
import { sendMessageToTelegram } from '../services/telegram';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        school: '',
        phone: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const success = await sendMessageToTelegram(formData);

        setIsLoading(false);
        if (success) {
            setIsSubmitted(true);
            setFormData({ name: '', school: '', phone: '', email: '', message: '' });
        } else {
            setError("Xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko'ring yoki telefon orqali bog'laning.");
        }
    };

    if (isSubmitted) {
        return (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(10,255,10,0.3)]">
                    <CheckCircle size={48} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Qabul qilindi!</h3>
                <p className="text-gray-400 mb-8 text-lg">
                    Sizning arizangiz muvaffaqiyatli yuborildi. Bizning menejerlarimiz tez orada siz bilan bog'lanishadi.
                </p>
                <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-primary font-bold hover:text-white transition-colors flex items-center gap-2 group"
                >
                    <ArrowRight className="rotate-180 group-hover:-translate-x-1 transition-transform" />
                    Yana ariza yuborish
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8 font-display">Hamkorlik Arizasi</h3>

            {error && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-200 p-4 rounded-xl flex items-start gap-3">
                    <AlertCircle className="flex-shrink-0 mt-0.5" size={20} />
                    <p className="text-sm">{error}</p>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Ismingiz</label>
                    <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-black/40 border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all placeholder-gray-700 hover:border-white/20 hover-trigger"
                        placeholder="Azizov Aziz"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Maktab</label>
                    <input
                        type="text"
                        name="school"
                        required
                        value={formData.school}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-black/40 border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all placeholder-gray-700 hover:border-white/20 hover-trigger"
                        placeholder="12-sonli maktab"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Telefon</label>
                    <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-black/40 border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all placeholder-gray-700 hover:border-white/20 hover-trigger"
                        placeholder="+998 90 123 45 67"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-black/40 border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all placeholder-gray-700 hover:border-white/20 hover-trigger"
                        placeholder="example@mail.uz"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Xabar</label>
                <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-black/40 border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all placeholder-gray-700 hover:border-white/20 resize-none hover-trigger"
                    placeholder="Savollaringiz yoki takliflaringiz..."
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-white text-black font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:shadow-[0_0_30px_rgba(0,243,255,0.6)] transition-all flex justify-center items-center gap-2 hover-trigger transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
                {isLoading ? 'Yuborilmoqda...' : 'Arizani Yuborish'}
            </button>
        </form>
    );
};

export default ContactForm;
