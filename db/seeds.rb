Appointment.destroy_all
Provider.destroy_all
User.destroy_all

Robin = User.create(
  first_name: 'Robin',
  last_name: 'Marble', 
  address: '123 Main Street Newnan, GA 30215',
  insurance: 'Blue Cross Blue Shield'
)

Devin = User.create(
  first_name: 'Devin',
  last_name: 'Hixson', 
  address: '456 Lake Ave Fayetteville, GA 30215',
  insurance: 'Cigna'
)

Eric = User.create(
  first_name: 'Eric',
  last_name: 'Dewitt', 
  address: '789 Athens Dr Lithonia, GA 30546',
  insurance: 'Aetna'
)

Albert = User.create(
  first_name: 'Albert',
  last_name: 'McLaurin', 
  address: '717 Lazy Street Columbus, GA 31909',
  insurance: 'Cigna'
)

Jones = Provider.create(
  first_name: 'Melissa',
  last_name: 'Jones',
  title: 'DDS',
  role: 'Doctor'
)

Moffett = Provider.create(
  first_name: 'Cora',
  last_name: 'Moffett',
  title: 'n/a', 
  role: 'Hygenist'
)

Strong = Provider.create(
  first_name: 'Henry',
  last_name: 'Strong',
  title: 'DDS',
  role: 'Doctor'
)

Jackson = Provider.create(
  first_name: 'Michael',
  last_name: 'Jackson',
  title: 'n/a',
  role: 'Hygenist'
)

November = Appointment.create(
  date: '11/30/2019',
  time: '2:00 pm',
  service: 'Cleaning',
  user: Robin,
  provider: Jackson
)

February = Appointment.create(
  date: '2/15/2019',
  time: '8:00 am',
  service: 'Dental Implants',
  user: Devin,
  provider: Strong
)

March = Appointment.create(
  date: '3/30/2019',
  time: '4:00 pm',
  service: 'X-rays',
  user: Eric,
  provider: Moffett
)

April = Appointment.create(
  date: '4/15/2019',
  time: '2:00 pm',
  service: 'Crown',
  user: Albert,
  provider: Jones
)

Robin_Results = Result.create(
  category: 'Invoice',
  title: 'Cleaning',
  image_url: 'http://imgus.me/img/',
  description: 'No cavities, took numbers for bone deteriation.',
  appointment_id: November
)

Eric_Results = Result.create(
  category: 'X-rays',
  title: 'X-rays',
  image_url: 'http://imgus.me/img/',
  description: 'New patient prep.',
  appointment_id: March
)

Albert_Results = Result.create(
  category: 'Invoice',
  title: 'Crown',
  image_url: 'http://imgus.me/img/',
  description: 'Success!',
  appointment_id: April
)

Devin_Results = Result.create(
  category: 'Insurance Response',
  title: 'Dental Implants',
  image_url: 'n/a',
  description: 'Front 4 teeth replaced.  Insurance will cover the next 2 during the next calendar year.',
  appointment_id: February
)

  