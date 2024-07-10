const sidebarItem: Menu[] = [
    { header: 'Dashboard' },
    {
        title: 'Dashboard',
        icon: 'custom-home-trend',
        to: '/dashboard/default',
    },
    { header: 'Utilities' },
    {
        title: 'Typography',
        icon: 'custom-typography',
        to: '/utils/typography',
    },
    {
        title: 'Colors',
        icon: 'custom-colorpick',
        to: '/utils/colors',
    },
    {
        title: 'Shadows',
        icon: 'custom-shadow',
        to: '/utils/shadows',
    },
    { header: 'Pages' },
    {
        title: 'Login',
        icon: 'custom-shield',
        to: '/auth/login1',
    },
    {
        title: 'Register',
        icon: 'custom-register',
        to: '/auth/register1',
    },
    { header: 'Others' },
    {
        title: 'Sample Page',
        icon: 'custom-sample',
        to: '/starter',
    },
    {
        title: 'Documentation',
        icon: 'custom-support',
        to: 'https://phoenixcoded.gitbook.io/able-pro/v/vue/',
        type: 'external',
    },
]

export default sidebarItem
