import './globals.css'
import { CartProvider } from '../context/CartContext';

export const metadata = {
    title: 'E-commerce App',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <CartProvider>{children}</CartProvider>
        </body>
        </html>
    );
}
