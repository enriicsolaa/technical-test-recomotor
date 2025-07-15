import { empleados, favoritos, marcas, modelos } from './schema'
import '../config/env'
import { connectDb } from '../config/db'

async function seed() {
  // Connectar a la bbdd
  const db = await connectDb()

  // Afegir treballadors
  await db.insert(empleados).values([
    { id: 1, nombre: 'Enric Sola' },
    { id: 2, nombre: 'Josep Valero' },
    { id: 3, nombre: 'Jaume Perera' },
    { id: 4, nombre: 'Anna Mendez' },
    { id: 5, nombre: 'Maria Grau' }
  ])

  // Afegir marques
  await db.insert(marcas).values([
    { id: 1, nombre: 'Tesla' },
    { id: 2, nombre: 'Nissan' },
    { id: 3, nombre: 'Volkswagen' },
    { id: 4, nombre: 'Toyota' },
    { id: 5, nombre: 'Honda' },
    { id: 6, nombre: 'Lamborghini' },
    { id: 7, nombre: 'Audi' },
    { id: 8, nombre: 'BMW' },
    { id: 9, nombre: 'Mercedes-Benz' },
    { id: 10, nombre: 'Porsche' }
  ])

  // Afegir models
  await db.insert(modelos).values([
    { id: 1, nombre: 'Model S Plaid', tipo: 'electrico', img: 'tesla-model-s.jpg', marcaId: 1 },
    { id: 2, nombre: 'GT-R', tipo: 'gasolina', img: 'nissan-gtr.jpg', marcaId: 2 },
    { id: 3, nombre: 'Golf GTD', tipo: 'diesel', img: 'volkswagen-golf-gtd.jpg', marcaId: 3 },
    { id: 4, nombre: 'Supra', tipo: 'gasolina', img: 'toyota-supra.jpg', marcaId: 4 },
    { id: 5, nombre: 'Acura NSX', tipo: 'gasolina', img: 'honda-acura-nsx.jpg', marcaId: 5 },
    { id: 6, nombre: 'Urus', tipo: 'gasolina', img: 'lamborghini-urus.jpg', marcaId: 6 },
    { id: 7, nombre: 'RS6', tipo: 'gasolina', img: 'audi-rs6.jpg', marcaId: 7 },
    { id: 8, nombre: 'M3', tipo: 'gasolina', img: 'bmw-m3.jpg', marcaId: 8 },
    { id: 9, nombre: 'A45 AMG', tipo: 'gasolina', img: 'mercedes-benz-a45-amg.jpg', marcaId: 9 },
    { id: 10, nombre: 'Cayenne E-Hybrid', tipo: 'hibrido', img: 'porsche-cayenne-e-hybrid.jpg', marcaId: 10 },
    { id: 11, nombre: 'Model 3', tipo: 'electrico', img: 'tesla-model-3.jpg', marcaId: 1 },
    { id: 12, nombre: 'Model X', tipo: 'electrico', img: 'tesla-model-x.jpg', marcaId: 1 },
    { id: 13, nombre: 'Model Y', tipo: 'electrico', img: 'tesla-model-y.jpg', marcaId: 1 },
    { id: 14, nombre: 'Roadster', tipo: 'electrico', img: 'tesla-roadster.jpg', marcaId: 1 },
    { id: 15, nombre: 'Leaf', tipo: 'electrico', img: 'nissan-leaf.jpg', marcaId: 2 },
    { id: 16, nombre: 'Altima', tipo: 'gasolina', img: 'nissan-altima.jpg', marcaId: 2 },
    { id: 17, nombre: '370Z', tipo: 'gasolina', img: 'nissan-370z.jpg', marcaId: 2 },
    { id: 18, nombre: 'Ariya', tipo: 'electrico', img: 'nissan-ariya.jpg', marcaId: 2 },
    { id: 19, nombre: 'Passat', tipo: 'diesel', img: 'volkswagen-passat.jpg', marcaId: 3 },
    { id: 20, nombre: 'ID.4', tipo: 'electrico', img: 'volkswagen-id4.jpg', marcaId: 3 },
    { id: 21, nombre: 'Polo', tipo: 'gasolina', img: 'volkswagen-polo.jpg', marcaId: 3 },
    { id: 22, nombre: 'Tiguan', tipo: 'diesel', img: 'volkswagen-tiguan.jpg', marcaId: 3 },
    { id: 23, nombre: 'Corolla', tipo: 'hibrido', img: 'toyota-corolla.jpg', marcaId: 4 },
    { id: 24, nombre: 'Prius', tipo: 'hibrido', img: 'toyota-prius.jpg', marcaId: 4 },
    { id: 25, nombre: 'GR86', tipo: 'gasolina', img: 'toyota-gr86.jpg', marcaId: 4 },
    { id: 26, nombre: 'Mirai', tipo: 'hidrogeno', img: 'toyota-mirai.jpg', marcaId: 4 },
    { id: 27, nombre: 'Civic Type R', tipo: 'gasolina', img: 'honda-civic-type-r.jpg', marcaId: 5 },
    { id: 28, nombre: 'CR-V Hybrid', tipo: 'hibrido', img: 'honda-crv-hybrid.jpg', marcaId: 5 },
    { id: 29, nombre: 'e:Ny1', tipo: 'electrico', img: 'honda-eny1.jpg', marcaId: 5 },
    { id: 30, nombre: 'Jazz', tipo: 'hibrido', img: 'honda-jazz.jpg', marcaId: 5 },
    { id: 31, nombre: 'Huracán EVO', tipo: 'gasolina', img: 'lamborghini-huracan-evo.jpg', marcaId: 6 },
    { id: 32, nombre: 'Aventador S', tipo: 'gasolina', img: 'lamborghini-aventador.jpg', marcaId: 6 },
    { id: 33, nombre: 'Revuelto', tipo: 'hibrido', img: 'lamborghini-revuelto.jpg', marcaId: 6 },
    { id: 34, nombre: 'Sián FKP 37', tipo: 'hibrido', img: 'lamborghini-sian.jpg', marcaId: 6 },
    { id: 35, nombre: 'A3 Sportback', tipo: 'gasolina', img: 'audi-a3.jpg', marcaId: 7 },
    { id: 36, nombre: 'e-tron GT', tipo: 'electrico', img: 'audi-etron-gt.jpg', marcaId: 7 },
    { id: 37, nombre: 'Q8 e-tron', tipo: 'electrico', img: 'audi-q8-etron.jpg', marcaId: 7 },
    { id: 38, nombre: 'S5 Coupe', tipo: 'gasolina', img: 'audi-s5.jpg', marcaId: 7 },
    { id: 39, nombre: 'i4', tipo: 'electrico', img: 'bmw-i4.jpg', marcaId: 8 },
    { id: 40, nombre: 'iX', tipo: 'electrico', img: 'bmw-ix.jpg', marcaId: 8 },
    { id: 41, nombre: 'X5', tipo: 'hibrido', img: 'bmw-x5.jpg', marcaId: 8 },
    { id: 42, nombre: 'Z4', tipo: 'gasolina', img: 'bmw-z4.jpg', marcaId: 8 },
    { id: 43, nombre: 'EQC', tipo: 'electrico', img: 'mercedes-eqc.jpg', marcaId: 9 },
    { id: 44, nombre: 'C-Class', tipo: 'diesel', img: 'mercedes-c-class.jpg', marcaId: 9 },
    { id: 45, nombre: 'EQS', tipo: 'electrico', img: 'mercedes-eqs.jpg', marcaId: 9 },
    { id: 46, nombre: 'GLA 250', tipo: 'hibrido', img: 'mercedes-gla250.jpg', marcaId: 9 },
    { id: 47, nombre: '911 Carrera', tipo: 'gasolina', img: 'porsche-911-carrera.jpg', marcaId: 10 },
    { id: 48, nombre: 'Taycan Turbo', tipo: 'electrico', img: 'porsche-taycan.jpg', marcaId: 10 },
    { id: 49, nombre: 'Panamera E-Hybrid', tipo: 'hibrido', img: 'porsche-panamera-hybrid.jpg', marcaId: 10 },
    { id: 50, nombre: 'Macan', tipo: 'gasolina', img: 'porsche-macan.jpg', marcaId: 10 },
    { id: 51, nombre: 'Cybertruck', tipo: 'electrico', img: 'tesla-cybertruck.jpg', marcaId: 1 },
    { id: 52, nombre: 'X-Trail e-Power', tipo: 'hibrido', img: 'nissan-xtrail-epower.jpg', marcaId: 2 },
    { id: 53, nombre: 'Arteon', tipo: 'gasolina', img: 'volkswagen-arteon.jpg', marcaId: 3 },
    { id: 54, nombre: 'Land Cruiser', tipo: 'diesel', img: 'toyota-land-cruiser.jpg', marcaId: 4 },
    { id: 55, nombre: 'Fit', tipo: 'gasolina', img: 'honda-fit.jpg', marcaId: 5 },
    { id: 56, nombre: 'Countach LPI 800-4', tipo: 'hibrido', img: 'lamborghini-countach.jpg', marcaId: 6 },
    { id: 57, nombre: 'RS e-tron GT', tipo: 'electrico', img: 'audi-rs-etron.jpg', marcaId: 7 },
    { id: 58, nombre: 'XM', tipo: 'hibrido', img: 'bmw-xm.jpg', marcaId: 8 },
    { id: 59, nombre: 'GLE Coupe', tipo: 'diesel', img: 'mercedes-gle-coupe.jpg', marcaId: 9 },
    { id: 60, nombre: '718 Boxster', tipo: 'gasolina', img: 'porsche-718-boxster.jpg', marcaId: 10 }
  ])
  

  // Adjudicar preferits
  await db.insert(favoritos).values([
    { empleadoId: 1, modeloId: 6 },
    { empleadoId: 2, modeloId: 9 },
    { empleadoId: 3, modeloId: 2 },
    { empleadoId: 4, modeloId: 7 },
    { empleadoId: 5, modeloId: 1 }
  ])

  console.log('Se ha seedeado la base de datos correctamente')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Error en seed:', err)
})
