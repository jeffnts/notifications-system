import { useMutation } from '@tanstack/react-query'
import { exportPDFService, exportXLSXService } from '@/services/historic'

export default function useReports() {
  const historic = [
    {
      application: 'TravelMate',
      channel: 'email',
      sendDate: '2023-05-01',
      receiveDate: '2023-05-02',
      readConfirmation: true,
      message: {
        title: 'Welcome to TravelMate',
        content:
          'Thank you for joining TravelMate. We hope you have a great experience.',
        redirectLink: 'https://travelmate.com/welcome',
        emailContent:
          'Dear user, welcome to TravelMate! Your journey starts here.',
      },
    },
    {
      application: 'Foodie',
      channel: 'web-push',
      sendDate: '2023-05-03',
      receiveDate: '2023-05-04',
      readConfirmation: false,
      message: {
        title: 'New Recipe Alert',
        content: 'Check out our new recipes just for you.',
        redirectLink: 'https://foodie.com/new-recipes',
        emailContent:
          'Dear user, we have added new recipes to our collection. Enjoy cooking!',
      },
    },
    {
      application: 'MindCalm',
      channel: 'sms',
      sendDate: '2023-05-05',
      receiveDate: '2023-05-06',
      readConfirmation: true,
      message: {
        title: 'Daily Meditation Reminder',
        content: "It's time for your daily meditation session.",
        redirectLink: 'https://mindcalm.com/meditation',
        emailContent:
          "Dear user, don't forget to take a break and meditate. Click here to start.",
      },
    },
    {
      application: 'FitLife',
      channel: 'email',
      sendDate: '2023-05-07',
      receiveDate: '2023-05-08',
      readConfirmation: true,
      message: {
        title: 'Workout Plan Update',
        content: 'Your new workout plan is here!',
        redirectLink: 'https://fitlife.com/workout-plan',
        emailContent:
          'Dear user, your workout plan has been updated. Click here to see the details.',
      },
    },
    {
      application: 'NewsFlash',
      channel: 'web-push',
      sendDate: '2023-05-09',
      receiveDate: '2023-05-10',
      readConfirmation: false,
      message: {
        title: 'Breaking News',
        content: 'Stay updated with the latest news.',
        redirectLink: 'https://newsflash.com/latest-news',
        emailContent:
          'Dear user, here are the latest headlines for today. Click here to read more.',
      },
    },
    {
      application: 'ShopEasy',
      channel: 'email',
      sendDate: '2023-05-11',
      receiveDate: '2023-05-12',
      readConfirmation: true,
      message: {
        title: 'Exclusive Offers',
        content: "Don't miss our exclusive offers!",
        redirectLink: 'https://shopeasy.com/offers',
        emailContent:
          'Dear user, we have exclusive offers just for you. Click here to shop now.',
      },
    },
    {
      application: 'BookWorm',
      channel: 'email',
      sendDate: '2023-05-13',
      receiveDate: '2023-05-14',
      readConfirmation: false,
      message: {
        title: 'New Arrivals',
        content: 'Check out the latest books in our collection.',
        redirectLink: 'https://bookworm.com/new-arrivals',
        emailContent:
          'Dear user, new books have arrived! Click here to see our latest collection.',
      },
    },
    {
      application: 'HealthFirst',
      channel: 'sms',
      sendDate: '2023-05-15',
      receiveDate: '2023-05-16',
      readConfirmation: true,
      message: {
        title: 'Health Tips',
        content: 'Daily health tips to keep you fit.',
        redirectLink: 'https://healthfirst.com/tips',
        emailContent:
          'Dear user, here are some health tips for you. Stay healthy!',
      },
    },
    {
      application: 'TechSavvy',
      channel: 'web-push',
      sendDate: '2023-05-17',
      receiveDate: '2023-05-18',
      readConfirmation: false,
      message: {
        title: 'Latest Tech Updates',
        content: 'Get the latest updates in technology.',
        redirectLink: 'https://techsavvy.com/updates',
        emailContent:
          'Dear user, stay updated with the latest in technology. Click here to read more.',
      },
    },
    {
      application: 'FitnessPro',
      channel: 'email',
      sendDate: '2023-05-19',
      receiveDate: '2023-05-20',
      readConfirmation: true,
      message: {
        title: 'Nutrition Guide',
        content: 'Your ultimate guide to nutrition.',
        redirectLink: 'https://fitnesspro.com/nutrition',
        emailContent:
          'Dear user, here is your ultimate guide to nutrition. Click here to read more.',
      },
    },
  ]

  const { mutate: exportPDF, isPending: isLoadingExportPdf } = useMutation({
    mutationFn: () => exportPDFService(historic),
    onSuccess(data) {
      const url = window.URL.createObjectURL(new Blob([data]))
      const a = document.createElement('a')
      a.href = url
      a.download = `${new Date().getTime()}-report.pdf`
      document.body.appendChild(a)
      a.click()
      a.remove()
    },
  })

  const { mutate: exportXLSX, isPending: isLoadingExportXLSX } = useMutation({
    mutationFn: () => exportXLSXService(historic),
    onSuccess(data) {
      const blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${new Date().getTime()}-report.xlsx`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
    },
  })

  return {
    historic,
    exportPDF,
    isLoadingExportPdf,
    exportXLSX,
    isLoadingExportXLSX,
  }
}
