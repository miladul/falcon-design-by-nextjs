// src/app/layout.tsx
import './globals.css';
import { ReduxProvider } from './providers/ReduxProvider';
import CartSyncProvider from "../components/CartSyncProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <ReduxProvider>
            <CartSyncProvider />
            {children}
        </ReduxProvider>
        </body>
        </html>
    );
}
