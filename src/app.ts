class Ellipsoid {
    //kötések (bind) pipe [pájp] AltGr + W
    aIn?: HTMLInputElement | null;
    bIn?: HTMLInputElement | null;
    cIn?: HTMLInputElement | null;
    Vol?: HTMLInputElement | null;
    Calc?: HTMLButtonElement | null;

    constructor() {
        this.bindHtml();
        this.handleEvent();
    }

    bindHtml() {
        this.aIn = document.querySelector("#ain");
        this.bIn = document.querySelector("#bin");
        this.cIn = document.querySelector("#cin");
        this.Vol = document.querySelector("#vol");
        this.Calc = document.querySelector("#Calcbutton");
    }

    handleEvent() {
        this.Calc?.addEventListener('click', () => {
            this.StartCalc();
        });
    }

    StartCalc() {
        const a = Number(this.aIn?.value);
        const b = Number(this.bIn?.value);
        const c = Number(this.cIn?.value);
        const volume = this.VolumeCalc(a,b,c);
        this.rederResult(volume);
    }
    VolumeCalc(a: number,b: number,c:number): number {
        return (4/3)*Math.PI*a*b*c
    }
    calcArea(side: number, alpha: number): number {
        const rad = alpha * Math.PI / 180;
        return Math.pow(side, 2) * Math.sin(rad);
    }
    rederResult(volume: number) {
        if(this.Vol) {
            this.Vol.value = String(volume);
        }      
    }
}

new Ellipsoid();