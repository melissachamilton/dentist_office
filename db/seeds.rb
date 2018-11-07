Appointment.destroy_all
Provider.destroy_all
User.destroy_all

Robin = User.create(
  first_name: 'Robin',
  last_name: 'Marble', 
  address: '123 Main Street Newnan, GA 30215',
  insurance: 'Blue Cross Blue Shield'
)

Jones = Provider.create(
  first_name: 'Melissa',
  last_name: 'Jones',
  title: 'DDS',
  role: 'Doctor',
)

November = Appointment.create(
  date: '11/30/2018',
  time: '2:00 pm',
  service: 'Cleaning',
  user: Robin,
  provider: Jones
)

Marble_Results = Result.create(
  category: 'Invoice',
  title: 'Cleaning',
  image_url: 'http://imgus.me/img/',
  description: 'No cavities, took numbers for bone deteriation.',
  appointment_id: November
)

  