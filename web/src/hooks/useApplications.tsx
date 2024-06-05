export default function useApplications() {
  const applications = [
    { id: '1', name: 'TravelMate', integrations: ['web-push', 'email', 'sms'] },
    { id: '2', name: 'Foodie', integrations: ['email', 'sms'] },
    { id: '3', name: 'MindCalm', integrations: ['sms'] },
    { id: '4', name: 'FitLife', integrations: ['web-push'] },
    { id: '5', name: 'NewsFlash', integrations: ['web-push', 'email'] },
    { id: '6', name: 'ShopEasy', integrations: ['web-push', 'email', 'sms'] },
    { id: '7', name: 'BookWorm', integrations: ['web-push', 'email', 'sms'] },
    {
      id: '8',
      name: 'HealthFirst',
      integrations: ['web-push', 'email', 'sms'],
    },
    { id: '9', name: 'TechSavvy', integrations: ['web-push', 'email', 'sms'] },
    {
      id: '10',
      name: 'FitnessPro',
      integrations: ['web-push', 'email', 'sms'],
    },
  ]

  const templates = [
    {
      id: '1',
      name: 'Template 1',
    },
    {
      id: '2',
      name: 'Template 2',
    },
  ]

  return {
    applications,
    templates,
  }
}
