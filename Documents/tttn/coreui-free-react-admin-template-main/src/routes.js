import React from 'react'
import TagsList from './views/base/tags/TagList'
import EditTags from './views/base/tags/EditTag'
import AddTag from './views/base/tags/AddTags'

import CustomerList from './views/base/customer/List'
import EditCustomer from './views/base/customer/Edit'
import AddCustomer from './views/base/customer/Add'

import OrderList from './views/base/order/List'
import EditOrder from './views/base/order/Edit'
import AddOrder from './views/base/order/Add'

import ContactList from './views/base/contact/List'
import EditContact from './views/base/contact/Edit'
import AddContact from './views/base/contact/Add'



const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))


// them, sua product
const Tables = React.lazy(() => import('./views/base/product/ProductList'))
const EditProduct = React.lazy(() => import('./views/base/product/EditProduct'))
const AddProduct = React.lazy(() => import('./views/base/product/AddProduct'))

//category
const CategoryList = React.lazy(() => import('./views/base/categories/CategoryList'))
const AddCategory = React.lazy(() => import('./views/base/categories/AddCategory'))
const EditCategory = React.lazy(() => import('./views/base/categories/EditCategory'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))


//slider
const SlideShowList = React.lazy(() => import('./views/base/slideshows/SlideShowList'))
const AddSlide = React.lazy(() => import('./views/base/slideshows/AddSlide'))
const EditSlideShow = React.lazy(() => import('./views/base/slideshows/EditSlideShow'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },



  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },


  //duong dan product
  { path: '/base/product/list', name: 'Product List', element: Tables },
  { path: '/base/product/edit/:id', name: 'EditProduct', element: EditProduct },
  { path: '/base/product/addProduct', name: 'AddProduct', element: AddProduct },

  //duong dan category
  { path: '/base/category/list', name: 'Category List', element: CategoryList },
  { path: '/base/category/addCategory', name: 'AddCategory', element: AddCategory },
  { path: '/base/category/list/edit/:id', name: 'EditCategory', element: EditCategory },

  //duong dan tag
  { path: '/base/tag/list', name: 'Tag List', element: TagsList },
  { path: '/base/tag/edit/:id', name: 'Tag Edit', element: EditTags },
  { path: '/base/tag/add', name: 'Tag Add', element: AddTag },

  //duong dan slide
  { path: '/base/slideshows/list', name: 'SlideShow List', element: SlideShowList },
  { path: '/base/slideshows/add', name: 'SlideShow Add', element: AddSlide },
  { path: '/base/slideshows/edit/:id', name: 'SlideShow Edit', element: EditSlideShow },

  //duong dan customer
  { path: '/base/customer/list', name: 'Customer List', element: CustomerList },
  { path: '/base/customer/edit/:id', name: 'Customer Edit', element: EditCustomer },
  { path: '/base/customer/add', name: 'Customer Add', element: AddCustomer },

  //duong dan customer
  { path: '/base/order/list', name: 'Order List', element: OrderList },
  { path: '/base/order/edit/:id', name: 'Order Edit', element: EditOrder },
  { path: '/base/order/add', name: 'Order Add', element: AddOrder },

  //duong dan contact
  { path: '/base/contact/list', name: 'Contact List', element: ContactList },
  { path: '/base/contact/edit/:id', name: 'Contact Edit', element: EditContact },
  { path: '/base/contact/add', name: 'Contact Add', element: AddContact },

  //
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },




  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
