// Ejercicio Clases 04 - TypeScript

// --- Modelo ---
export class Persona {
    constructor(
      public primerNombre: string,
      public nombreIntermedio: string | null,
      public apellido1: string,
      public apellido2: string | null,
      public anioNacimiento: number,
      public identificativo: string,
      public activo: boolean
    ) {}
  }
  
  // Para referenciar las propiedades por nombre
  type CampoPersona = keyof Persona;
  
  // --- Interfaces ---
  export interface IValidadorPersona {
    isValid(p: Persona): boolean;
    camposObligatorios(): CampoPersona[];
  }
  
  export interface IMostrador {
    muestra(p: Persona): string; // devuelve HTML
  }
  
  // --- Utilidades ---
  function tieneValor(v: unknown): boolean {
    return v !== null && v !== undefined && `${v}`.trim() !== "";
  }
  
  function camposConValor(p: Persona, campos: CampoPersona[]): CampoPersona[] {
    return campos.filter((c) => tieneValor(p[c]));
  }
  
  const TODOS_LOS_CAMPOS: CampoPersona[] = [
    "identificativo",
    "primerNombre",
    "nombreIntermedio",
    "apellido1",
    "apellido2",
    "anioNacimiento",
    "activo",
  ];
  
  // --- Validadores ---
  export class ValidadorIngles implements IValidadorPersona {
    private obligatorios: CampoPersona[] = [
      "identificativo",
      "primerNombre",
      "nombreIntermedio",
      "apellido1",
    ];
    camposObligatorios(): CampoPersona[] {
      return this.obligatorios;
    }
    isValid(p: Persona): boolean {
      return camposConValor(p, this.obligatorios).length === this.obligatorios.length;
    }
  }
  
  export class ValidadorEspanol implements IValidadorPersona {
    private obligatorios: CampoPersona[] = [
      "identificativo",
      "primerNombre",
      "apellido1",
      "apellido2",
    ];
    camposObligatorios(): CampoPersona[] {
      return this.obligatorios;
    }
    isValid(p: Persona): boolean {
      return camposConValor(p, this.obligatorios).length === this.obligatorios.length;
    }
  }
  
  // --- Etiquetas (i18n) ---
  type Etiquetas = Record<CampoPersona, string>;
  
  const etiquetasEN: Etiquetas = {
    identificativo: "Identifier",
    primerNombre: "First Name",
    nombreIntermedio: "Middle Name",
    apellido1: "Surname 1",
    apellido2: "Surname 2",
    anioNacimiento: "Year of Birth",
    activo: "Active",
  };
  
  const etiquetasES: Etiquetas = {
    identificativo: "Identificativo",
    primerNombre: "Primer Nombre",
    nombreIntermedio: "Nombre Intermedio",
    apellido1: "Apellido 1",
    apellido2: "Apellido 2",
    anioNacimiento: "Año de Nacimiento",
    activo: "Activo",
  };
  
  function valorComoTexto(v: unknown): string {
    if (typeof v === "boolean") return v ? "Sí" : "No";
    return `${v ?? ""}`;
  }
  
  function renderListaHTML(
    titulo: string,
    p: Persona,
    campos: CampoPersona[],
    etiquetas: Etiquetas
  ): string {
    if (campos.length === 0) return "";
    const lis = campos
      .map((c) => `<li><strong>${etiquetas[c]}:</strong> ${valorComoTexto(p[c])}</li>`)
      .join("");
    return `<section><h4>${titulo}</h4><ul>${lis}</ul></section>`;
  }
  
  // --- Mostradores ---
  abstract class MostradorBase implements IMostrador {
    constructor(private validador: IValidadorPersona) {}
  
    protected abstract etiquetas(): Etiquetas;
    protected abstract titulos(): { oblig: string; opt: string; valido: string; invalido: string };
  
    muestra(p: Persona): string {
      const etq = this.etiquetas();
      const { oblig, opt, valido, invalido } = this.titulos();
  
      const obligatorios = this.validador.camposObligatorios();
      const opcionales = TODOS_LOS_CAMPOS.filter((c) => !obligatorios.includes(c));
  
      const obligConValor = camposConValor(p, obligatorios);
      const opcConValor = camposConValor(p, opcionales);
  
      const estado = this.validador.isValid(p) ? valido : invalido;
  
      const htmlOblig = renderListaHTML(oblig, p, obligConValor, etq);
      const htmlOpt = renderListaHTML(opt, p, opcConValor, etq);
  
      return `
        <article class="persona">
          <h3>${estado}</h3>
          ${htmlOblig}
          ${htmlOpt}
        </article>
      `.trim();
    }
  }
  
  export class MostradorIngles extends MostradorBase {
    protected etiquetas(): Etiquetas {
      return etiquetasEN;
    }
    protected titulos() {
      return {
        oblig: "Required fields",
        opt: "Optional fields",
        valido: "Valid person (EN)",
        invalido: "Invalid person (missing required fields) (EN)",
      };
    }
  }
  
  export class MostradorEspanol extends MostradorBase {
    protected etiquetas(): Etiquetas {
      return etiquetasES;
    }
    protected titulos() {
      return {
        oblig: "Campos obligatorios",
        opt: "Campos optativos",
        valido: "Persona válida (ES)",
        invalido: "Persona inválida (faltan obligatorios) (ES)",
      };
    }
  }
  
  
  // --- Ejemplo de uso ---
  // const p = new Persona("Ismael", null, "Lázaro", "García", 2001, "ABC123", true);
  // const valES = new ValidadorEspanol();
  // const viewES = new MostradorEspanol(valES).muestra(p);
  // document.body.innerHTML = viewES;
  