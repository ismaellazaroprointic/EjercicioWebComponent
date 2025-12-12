import { armyService } from './main';
import { DefaultUnitFactory } from '../domain/factory/defaultUnitFactory';
import { SpeedBoostDecorator } from '../domain/decorators/speedBoostDecorator';
import { ArmorBoostDecorator } from '../domain/decorators/armorBoostDecorator';

const factory = new DefaultUnitFactory();

function logSection(title: string) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`  ${title}`);
  console.log('='.repeat(60));
}

function logUnit(unit: any, description: string) {
  console.log(`\n📦 ${description}`);
  console.log(`   Nombre: ${unit.getNombre()}`);
  console.log(`   Precio: ${unit.getPrecio()}€`);
  console.log(`   Velocidad: ${unit.getMovimientoTotal()}`);
  console.log(`   Blindaje: ${unit.getBlindajeTotal()}`);
  console.log(`   Potencia de Fuego: ${unit.getPotenciaFuegoTotal()}`);
}

export async function wireUi() {
  const btn = document.getElementById('create') as HTMLButtonElement;
  const output = document.getElementById('output') as HTMLPreElement;

  btn.addEventListener('click', async () => {
    try {
      logSection('🎖️ SISTEMA DE GESTIÓN DE EJÉRCITOS');
      
      // 1) Crear ejército con fondo limitado
      logSection('1️⃣ CREACIÓN DE EJÉRCITO (Patrón Composite)');
      const army = await armyService.createArmy('Ejército Web', 50000);
      console.log(`✅ Ejército "${army.getNombre()}" creado con ID: ${army.getId()}`);
      console.log(`💰 Fondo máximo: ${army.getFondoMaximo()}€`);
      console.log(`💾 Guardado en IndexedDB (Patrón Repository)`);

      // 2) Añadir unidades de las tres divisiones
      logSection('2️⃣ DIVISIÓN: INFANTERÍA');
      const infanteria = factory.createInfanteriaBasica();
      logUnit(infanteria, 'Infantería Básica');
      await armyService.addElement(army.getId(), infanteria);
      console.log(`   ✅ Añadida al ejército`);

      logSection('3️⃣ DIVISIÓN: CABALLERÍA');
      const tanque = factory.createTanqueSombrasVB98();
      logUnit(tanque, 'Tanque Sombras-VB98 (BASE)');
      console.log(`   🔧 Aplicando decoradores (Patrón Decorator):`);
      
      // 3) Aplicar decoradores
      const speedBoosted = new SpeedBoostDecorator(tanque);
      console.log(`   ⚡ SpeedBoostDecorator: +30% velocidad`);
      console.log(`      Velocidad original: ${tanque.getMovimientoTotal()}`);
      console.log(`      Velocidad mejorada: ${speedBoosted.getMovimientoTotal().toFixed(2)} (+30%)`);
      
      const boosted = new ArmorBoostDecorator(speedBoosted);
      console.log(`   🛡️ ArmorBoostDecorator: +30% blindaje`);
      console.log(`      Blindaje original: ${tanque.getBlindajeTotal()}`);
      console.log(`      Blindaje mejorado: ${boosted.getBlindajeTotal().toFixed(2)} (+30%)`);
      console.log(`   ✅ Tanque decorado añadido al ejército`);
      await armyService.addElement(army.getId(), boosted);

      logSection('4️⃣ ADAPTER: MARSHALL TANK (Patrón Adapter)');
      const marshall = factory.createMarshallTank();
      console.log(`   🇺🇸 Unidad americana (Marshall Tank)`);
      console.log(`   🔄 Conversión: MPH → KM/H`);
      const marshallTank = factory.createMarshallTank();
      logUnit(marshallTank, 'Marshall Tank (adaptado)');
      console.log(`   ✅ Adapter convierte velocidad de 30 mph a ${marshallTank.getMovimientoTotal().toFixed(2)} km/h`);
      await armyService.addElement(army.getId(), marshallTank);

      logSection('5️⃣ DIVISIÓN: ARTILLERÍA');
      const canon = factory.createCanonAntiaereo();
      logUnit(canon, 'Cañón Antiaéreo');
      await armyService.addElement(army.getId(), canon);
      console.log(`   ✅ Añadido al ejército`);

      // 4) Mostrar estadísticas y cálculo de CM
      logSection('6️⃣ ESTADÍSTICAS DEL EJÉRCITO');
      const stats = await armyService.getStats(army.getId());
      
      console.log(`\n📊 RESUMEN:`);
      console.log(`   Nombre: ${stats.nombre}`);
      console.log(`   Elementos totales: ${stats.elementos}`);
      console.log(`   💰 Gasto total: ${stats.gasto}€ / ${stats.fondoMaximo}€`);
      console.log(`   🔥 Potencia de Fuego Total: ${stats.potenciaFuego.toFixed(2)}`);
      console.log(`   🛡️ Blindaje Total: ${stats.blindaje.toFixed(2)}`);
      console.log(`   ⚡ Movimiento Total: ${stats.movimiento.toFixed(2)}`);
      
      logSection('7️⃣ CÁLCULO DE CAPACIDAD MILITAR (CM) - Patrón Strategy');
      console.log(`   Fórmula: CM = (Pf * (Cm/2)) / (100 - Bl)`);
      console.log(`   Cálculo:`);
      console.log(`      CM = (${stats.potenciaFuego.toFixed(2)} * (${stats.movimiento.toFixed(2)}/2)) / (100 - ${stats.blindaje.toFixed(2)})`);
      console.log(`      CM = (${stats.potenciaFuego.toFixed(2)} * ${(stats.movimiento / 2).toFixed(2)}) / ${(100 - stats.blindaje).toFixed(2)}`);
      console.log(`      CM = ${(stats.potenciaFuego * (stats.movimiento / 2)).toFixed(2)} / ${(100 - stats.blindaje).toFixed(2)}`);
      console.log(`   🎯 CAPACIDAD MILITAR: ${stats.capacidadMilitar.toFixed(10)}`);

      logSection('8️⃣ INTERFACES DE CAPACIDADES');
      console.log(`   ✅ IDestructor: Unidades con capacidad de destrucción`);
      console.log(`   ✅ IMovil: Unidades con capacidad de movimiento`);
      console.log(`   ✅ IBlindado: Unidades con resistencia al ataque`);

      logSection('✅ PROCESO COMPLETADO');
      console.log(`\n💾 Datos guardados en IndexedDB`);
      console.log(`📋 Ver estadísticas completas en pantalla\n`);

      // Mostrar en pantalla
      output.textContent = JSON.stringify(stats, null, 2);
      
    } catch (error: any) {
      console.error('\n❌ ERROR:', error.message);
      if (error.name === 'BudgetExceededError') {
        console.error('   💰 Fondo insuficiente para añadir más unidades');
      }
      output.textContent = `Error: ${error.message}`;
    }
  });
}
