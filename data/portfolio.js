import slugify from 'slugify'

export const portfolio = [
  {
    title: 'Golijska ledena',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac libero a dolor feugiat iaculis. Maecenas non arcu at justo eleifend varius. Sed id est ut ligula suscipit finibus. In euismod risus vitae nisl tincidunt, sit amet facilisis libero tristique. Cras vitae tellus at ex luctus fringilla nec id dui.Cras vitae tellus at ex luctus fringilla nec id dui.Cras vitae tellus at ex luctus fringilla nec id dui.Cras vitae tellus at ex luctus fringilla nec id dui.',
    slug: 'golijska-ledena',
    filters: [''],
    active: true,
  },
  {
    title: 'Web dizajn',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac libero a dolor feugiat iaculis. Maecenas non arcu at justo eleifend varius. Sed id est ut ligula suscipit finibus. In euismod risus vitae nisl tincidunt, sit amet facilisis libero tristique. Cras vitae tellus at ex luctus fringilla nec id dui. Cras vitae tellus at ex luctus fringilla nec id dui.',
    link: '/',
    active: false,
  },
  {
    title: 'Graficki dizajn',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac.',
    link: '/',
    active: false,
  },
  {
    title: 'Drustvene mreze',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac libero a dolor feugiat iaculis. Maecenas non arcu at justo.',
    link: '/',
    active: false,
  },
]

export const portfolioFilters = [
  {
    id: 1,
    title: 'Web dizajn',
    active: false,
  },
  {
    id: 2,
    title: 'Graficki dizajn',
    active: false,
  },
  {
    id: 3,
    title: 'Web development',
    active: false,
  },
  {
    id: 4,
    title: 'Marketing',
    active: false,
  },
]
