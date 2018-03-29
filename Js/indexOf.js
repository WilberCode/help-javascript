let tickes = [5235, 3525, 1556, 2563, 6532]

let validTicket = a => tickes.indexOf(a) != -1 ? 'El ticket  es valido' : 'el ticket no es valido'

console.log(validTicket(65832))
