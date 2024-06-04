"use client";
import React, { useState, useEffect } from "react";
import {
  generateCrosshairCommands,
  generateRandomCrosshair,
} from "../utils/generator";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/toggle";
import { toast, useToast } from "@/components/ui/use-toast";
import CanvasCrosshair from "./CanvasCrosshair";

const CrosshairGenerator: React.FC = () => {
  const { toast } = useToast();
  const [crosshairConfig, setCrosshairConfig] = useState(
    generateRandomCrosshair()
  );
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setCrosshairConfig(generateRandomCrosshair());
    setHydrated(true);
  }, []);

  const handleGenerate = () => {
    setCrosshairConfig(generateRandomCrosshair());
  };

  const handleCopy = () => {
    const commands = generateCrosshairCommands(crosshairConfig);
    navigator.clipboard.writeText(commands);
    toast({
      title: "Crosshair Copiada! ✅ ",
      description: "Solo tenes que abrir la consola y pegar el código",
    });
  };

  if (!hydrated) {
    return null; // o un spinner de carga
  }

  const crosshairCommands = generateCrosshairCommands(crosshairConfig);

  return (
    <div className=" mx-auto my-10 ">
      <h1 className="text-3xl font-bold ">
        Generador de Mira Aleatoria para CS2
      </h1>
      <p className="my-2 mb-4">Ninguna mira fruta</p>

      <div className="flex gap-2 items-center">
        <Button
          className="bg-red-400"
          onClick={handleGenerate}
          variant="default"
        >
          Generar Mira
        </Button>
        <ModeToggle />
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Comandos Generados:</h2>
        <p className="p-4 rounded-lg mt-2 text-left dark:bg-slate-800 bg-gray-200">
          {crosshairCommands}
        </p>
        <CanvasCrosshair {...crosshairConfig} />
        <div className="flex items-center justify-start gap-2 mt-4">
          <Button
            onClick={handleCopy}
            className="bg-green-400 transition duration-300"
          >
            Copiar Comandos
          </Button>
          <Button variant="outline">
            <a
              href="https://steamcommunity.com/id/sebitenburgos"
              target="_blank"
              rel="noopener noreferrer"
            >
              Steam
            </a>
          </Button>
        </div>
      </div>
      <hr className="mt-12"></hr>
    </div>
  );
};

export default CrosshairGenerator;
