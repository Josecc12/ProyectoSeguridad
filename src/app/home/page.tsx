'use client'

import { v4 as uuidv4 } from 'uuid';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function Page() {

    const token = uuidv4();

    const handleDownload = () => {
        const fileUrl = "/token.txt"; // Ruta del archivo en la carpeta public
        const element = document.createElement("a");
        element.href = fileUrl;
        element.download = "token.txt"; // Nombre que se verá en la descarga
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    return (
        <div className="flex items-center justify-center w-full min-h-screen">
            <div className='flex flex-col gap-2 p-14'>
                <h1 className="text-4xl font-bold text-center">Bienvenido </h1>
                <p className="text-xl">Usuario: {token}</p>
                <Button onClick={handleDownload} className="mt-4">
                    <Download className="mr-2 h-4 w-4" /> Descargar archivo
                </Button>
            </div>
        </div>
    );
}
