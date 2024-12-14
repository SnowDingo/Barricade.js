export * from "./components/RightDisable"
export * from "./components/copyDisable"

export function BarricadeSetup(options: {
    rightdisable: boolean;
    copydisable: boolean;
    showalerts: boolean;
}): void;