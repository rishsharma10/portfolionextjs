import _superagent, { search } from 'superagent';
const SuperagentPromise = require('superagent-promise');
const superagent = SuperagentPromise(_superagent, global.Promise);

const API_ROOT = `https://sharedecommerce.henceforthsolutions.com:3004/`;
const INSTAGRAM_API_ROOT = 'https://graph.instagram.com/'; //live

const BUCKET_ROOT = `https://sharedecommerce.nyc3.digitaloceanspaces.com/sharedecommerce/`;

const API_FILE_ROOT_MEDIUM = `${BUCKET_ROOT}medium/`;
const API_FILE_ROOT_ORIGINAL = `${BUCKET_ROOT}original/`;
const API_FILE_ROOT_SMALL = `${BUCKET_ROOT}small/`;
const API_FILE_ROOT_AUDIO = `${BUCKET_ROOT}audio/`;
const API_FILE_ROOT_VIDEO = `${BUCKET_ROOT}video/`;
const API_FILE_ROOT_DOCUMENTS = `${BUCKET_ROOT}documents/`;

const encode = encodeURIComponent;
const responseBody = (res: any) => res.body;
let Language=''
const language = (req: any) => {
 Language=req
}
let token: any = null;
const tokenPlugin = (req: any) => {
  if (token) {
    // req.set('authorization', `Bearer ${token}`);
    req.set('token', token);
  }
}

const requests = {
  del: (url: string) =>
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: (url: string) =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  put: (url: string, body: any) =>
    superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  patch: (url: string, body: any) =>
    superagent.patch(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  post: (url: string, body: any) =>
    superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  file: (url: string, key: string, file: any) =>
    superagent.post(`${API_ROOT}${url}`).attach(key, file).use(tokenPlugin).then(responseBody)
};
const instagramApi = {
  del: (url: string) =>
    superagent.del(`${INSTAGRAM_API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: (url: string) =>
    superagent.get(`${INSTAGRAM_API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  put: (url: string, body: any) =>
    superagent.put(`${INSTAGRAM_API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  patch: (url: string, body: any) =>
    superagent.patch(`${INSTAGRAM_API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  post: (url: string, body: any) =>
    superagent.post(`${INSTAGRAM_API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
};

const Auth = {
  login: (info: any) =>
    requests.post('User/login', info),
  loginAsUser: (info: any) =>
    requests.post('Admin/users/login_as_user', info),
  signUp: (info: any) =>
    requests.post('User/signup', info),
  signUpAsCreater: (info: any) =>
    requests.post('User/sigup_as_creater', info),
  resetPassword: (info: any) =>
    requests.post('User/forgot_password', info),
  logout: () =>
    requests.put('User/logout', {}),
  checkOtp: (info: any) =>
    requests.post('check-email-otp', info),
  resendOtp: (info: any) =>
    requests.post('User/resend_otp', info),
  resendOtpForForgotPassword: (info: any) =>
    requests.post('User/forgot_password/resend_otp', info),
  emailVerification: (info: any) =>
    requests.post('User/email_verification', info),
  ageVerification: (info: any) =>
    requests.post('User/age_verification', info),
  connetWallet: (info: any) =>
    requests.post('User/connect/wallet', info),
  connectSocialAccount: (info: any) =>
    requests.post('User/connect/social_account', info),
  changePassword: (info: any) =>
    requests.put('User/change_password', info),
  forgotChangePassword: (info: any) =>
    requests.post('User/forgot_password/set_password', info),
  profile: () =>
    requests.get(`User/view_my_profile`),
  editProfile: (info: any) =>
    requests.put('User/edit_profile', info),
  socialLogin: (info: any) =>
    requests.post('User/social_login', info),
  verifyOtp: (info: any) =>
    requests.post('User/forgot_password/verify_otp', info),
  resendPhoneOtp: (info: any) =>
    requests.post('User/resend/phone_no/otp', info),
  verifyPhone: (info: any) =>
    requests.post('User/verify/phone_no', info),
};
const Search = {
  pagination: (search: string, nft_type: string) =>
    requests.get(`Nft/search?search=${search}&nft_type=${nft_type}&limit=10&pagination=0&language=${Language}`),
  reels: (user_id: string, amount: number) =>
    requests.get(`reels/getReels?user_id=${user_id}&amount=${amount ? amount : 10}`),
  getById: (id: string) =>
    requests.get(`profile?id=${id}`),
  searchSubCatg: (id: string) =>
    requests.get(`Product/sub_subcategories?subcategory_id=${id}&language=${Language}`)
};
const Address = {
  get: () =>
    requests.get(`User/address?limit=10&pagination=0&language=${Language}`),
  getById: (id: string) =>
    requests.get(`User/address?_id=${id}&limit=10&pagination=0&language=${Language}`),
  add: (info: any) =>
    requests.post(`User/address`, info),
  setDefault: (id: string) =>
    requests.put(`User/address?_id=${id}&language=${Language}`, id),
  delete: (id: string) =>
    requests.del(`User/address/delete/${id}`),
  checkDeliveryAvailable: (id: string) =>
    requests.get(`Order/address/delivery/${id}?language=${Language}`)
}

const Card = {
  get: () =>
    requests.get(`Stripe/card?language=${Language}`),
  add: (info: any) =>
    requests.post(`Stripe/card`, info),
  delete: (id: string) =>
    requests.del(`Stripe/card/${id}`),
}

const Common = {
  uploadFile: (key: string, file: any) =>
    requests.file(`Upload/do_spaces_file_upload`, key, file),
  contactus: (info: any) =>
    requests.post(`User/contact_us`, info),
  nested: () =>
    requests.get(`User/nested?language=${Language}`),
  payments: () =>
    requests.get(`user/payments`),
  paymentsecurity: () =>
    requests.get(`user/paymentsecurity`),
  returnpolicy: () =>
    requests.get(`user/returnpolicy`),
  shipping: () =>
    requests.get(`user/shipping`),
  faq: () =>
    requests.get(`Product/faqs?language=${Language}`),
  content: (type: string) =>
    requests.get(`User/list_content?language=${Language}&type=${type}`),
  checkDelivery: (id: string, lat: string, lng: string) =>
    requests.get(`Product/check/delivery?product_id=${id}&lat=${lat}&lng=${lng}&language=${Language}`),
  timer: () =>
    requests.get(`Homepage/user/deals_day/timer`)
}


const Profile = {
  edit: (info: any) =>
    requests.put('User/profile', info),
  get: () =>
    requests.get(`User/profile?language=${Language}`),
  fcmToken: (fcm_token: string) =>
    requests.put('User/fcm', {
      device_type: "Web",
      fcm_token,
      language,
    }),
  getWallet: () =>
    requests.get(`User/wallet/listing?language=${Language}`),
  deleteWallet: (_id: string) =>
    requests.del(`User/wallet/${_id}`),
  deleteSocial: (_id: string) =>
    requests.del(`User/social_account/${_id}?language=${Language}`),
};
const Products = {
  dealsOfTheDayPagination: (pagination: number, limit: number,) =>
    requests.get(`Homepage/user/deal_of_the_day?limit=${limit ? limit : 6}&pagination=${pagination ? pagination : 0}&language=${Language}`),
  fashionDealsPagination: (pagination: number, limit: number,) =>
    requests.get(`Homepage/user/fashion_deals?limit=${limit ? limit : 6}&pagination=${pagination ? pagination : 0}&language=${Language}`),
  details: (_id: any) =>
    requests.get(`Product/details?_id=${_id}&language=${Language}`),
  review: (_id: any) =>
    requests.get(`Product/reviews?_id=${_id}&language=${Language}`),
  variant: (_id: any) =>
    requests.get(`Product/products/variants?_id=${_id}&language=${Language}`),
  faqs: (_id: any, limit: number, pagination: number) =>
    requests.get(`User/product/faqs?product_id=${_id}&language=${Language}&limit=${limit ? limit : 6}&pagination=${pagination ? pagination : 0}`),
  faqsLikeDislike: (info: any) =>
    requests.post(`User/product/faqs/like-dislike`, info),
  search: (search: any) =>
    requests.get(`User/search?search=${search}`),
  productSubcategory: (id: any, discount: any, limit: number, pagination: number, q: any, s: any) =>
    requests.get(`Product/filters?language=${Language}&limit=${limit ? limit : 6}&pagination=${pagination ? pagination : 0}&subcategory_id=${id}${q ? `&sub_subcategory_id=${q}` : ""}${s ? `&brand_id=${s}` : ""}${discount ? `&discount_available=${discount}` : ""}`),
  filter: (limit: number, q: string) =>
    requests.get(`Product/filters?language=${Language}&limit=${limit ? limit : 6}${q ? `&${q}` : ''}`),
  related: (product_id: string, limit: number, pagination: number) =>
    requests.get(`Product/related?product_id=${product_id}&language=${Language}&limit=${limit ? limit : 6}&pagination=${pagination ? pagination : 0}`),
  brands: (limit: number, pagination: number, search: any) =>
    requests.get(`Product/brands?limit=${limit ? limit : 6}&pagination=${pagination ? pagination : 0}&search=${search}`),
  categories: (pagination: number, limit?: number,) =>
    requests.get(`Product/categories?language=${Language}&pagination=${pagination ? pagination : 0}${limit ? `&limit=${limit}` : ''}`),
  subCategories: (limit: number, pagination: number) =>
    requests.get(`Product/subcategories?language=${Language}&pagination=${pagination ? pagination : 0}${limit && `&limit=${limit}`}`),
  deals_of_the_day: (pagination: number, limit: number,lang:string) =>
    requests.get(`Product/deals_of_the_day?limit=${limit ? limit : 6}&pagination=${pagination ? pagination : 0}&language=${lang ? lang : "ENGLISH"}`),
  fashion_deals: (pagination: number, limit: number,lang:string) =>
    requests.get(`Product/fashion_deals?limit=${limit ? limit : 6}&pagination=${pagination ? pagination : 0}&language=${lang ? lang : "ENGLISH"}`),
  deals: (pagination: number, limit: number, title: any,lang:string) =>
    requests.get(`Homepage/user/${title}?limit=${limit ? limit : 6}&pagination=${pagination ? pagination : 0}&language=${lang ? lang : "ENGLISH"}`),

};
const Cart = {
  addCart: (info: any) =>
    requests.post(`User/cart`, info),
  update: (info: any) =>
    requests.put(`User/cart`, info),
  getCart: (pagination: number, limit: number) =>
    requests.get(`User/cart?limit=${limit ? limit : 6}&pagination=${pagination ? pagination : 0}`),
  delete: (_id: any) =>
    requests.del(`User/cart/${_id}`),

}
const WishList = {
  add: (product_id: string) =>
    requests.post(`User/wishlist`, { product_id }),
  pagination: (pagination: number, limit?: number) =>
    requests.get(`User/wishlist?language=${Language}&limit=${limit ? limit : 6}&pagination=${pagination ? pagination : 0}`),
  delete: (_id: any) =>
    requests.del(`User/wishlists/delete/${_id}`)
}
const Review = {
  add: (info: any) =>
    requests.post(`User/review`, info),
  edit: (info: any) =>
    requests.put(`User/review`, info),
  pagination: (pagination: number, limit?: number,) =>
    requests.get(`User/review/my?limit=${limit ? limit : 10}&pagination=${pagination ? pagination : 0}`),
  details: (_id: string) =>
    requests.get(`User/review/my/${_id}?language=${Language}`),
  availableForReview: (product_id: string) =>
    requests.get(`User/review/my?product_id=${product_id}`),
  delete: (_id: any) =>
    requests.del(`User/review/delete/${_id}`),
  reviewList: (_id: any, limit: number, pagination: number) =>
    requests.get(`Product/reviews?language=${Language}&_id=${_id}&limit=${limit ? limit : 6}&pagination=${pagination ? pagination : 0}`),
  canReview: (product_id: string) =>
    requests.get(`User/review/can_add?product_id=${product_id}`)
}

const Coupons = {
  checkValid: (info: any) =>
    requests.post(`Order/coupon/availablity`, info),
  getList: (limit: number, pagination: number) =>
    requests.get(`User/coupons?language=${Language}&limit=${limit ? limit : 6}&pagination=${pagination ? pagination : 0}`),
  getExpired: (limit: number, pagination: number) =>
    requests.get(`User/coupons/expired?language=${Language}&limit=${limit ? limit : 6}&pagination=${pagination ? pagination : 0}`),
  home: () =>
    requests.get(`Homepage/coupon`),
}
const Home = {
  banner_1: () =>
    requests.get(`Homepage/user/banner?language=${Language}&position=TOP`),
  banner_2: () =>
    requests.get(`Homepage/user/banner?language=${Language}&position=MIDDLE`),
  banner_3: () =>
    requests.get(`Homepage/user/banner?language=${Language}&position=BOTTOM`),
  top_deals: () =>
    requests.get(`Homepage/user/top_deals?language=${Language}`),
  featured_category: (pagination: number, limit: number) =>
    requests.get(`Homepage/user/featured_categories?language=${Language}&limit=${limit ? limit : 6}&pagination=${pagination ? pagination : 0}`),
  shop_with_us: (pagination: number, limit: number) =>
    requests.get(`Homepage/user/shop_with_us?language=${Language}&limit=${limit ? limit : 6}&pagination=${pagination ? pagination : 0}`),
  best_on_ecomm: (pagination: number, limit: number) =>
    requests.get(`Homepage/user/best_on_ecom?language=${Language}&limit=${limit ? limit : 6}&pagination=${pagination ? pagination : 0}`),
  styles_for: () =>
    requests.get(`Homepage/user/style_for_categories?language=${Language}`),
  categories: () =>
    requests.get(`User/categories`),
  sub_categories: (category_id: string) =>
    requests.get(`User/sub_categories?category_id=${category_id}`),

}
const Order = {
  get: (limit: number, pagination: number, order_status: string) =>
    requests.get(`Order?limit=${limit ? limit : 6}&pagination=${pagination ? pagination : 0}&order_status=${order_status.toUpperCase()}&language=${Language}`),
  details: (id: any) =>
    requests.get(`User/order/details?_id=${id}&language=${Language}`),
  add: (info: any) =>
    requests.post(`Order`, info),
  cancel: (info: any) =>
    requests.put(`Order/cancel`, info),
  orderPlacedDetails: (id: string) =>
    requests.get(`Order/${id}?language=${Language}`),
  orderPlaced: (id: string) =>
    requests.get(`Order/products/${id}?language=${Language}`),
  placedInvoice: (id: string) =>
    requests.get(`Order/invoice/detail/${id}?language=${Language}`),
    priceDetails: () =>
    requests.get(`User/cart/price_details`),
  cancelRequest: (info: any) =>
    requests.put(`Order/cancellation/request`, info),

}
const Notification ={
  get: (pagination: number, limit: number) =>
  requests.get(`User/notifications?language=${Language}&limit=${limit ? limit : 6}&pagination=${pagination ? pagination : 0}`)
}
const FILES = {
  audio: (filename: string) => filename?.startsWith('http') ? filename : `${API_FILE_ROOT_AUDIO}${filename}`,
  video: (filename: string) => filename?.startsWith('http') ? filename : `${API_FILE_ROOT_VIDEO}${filename}`,
  imageOriginal: (filename: string) => filename?.startsWith('http') ? filename : `${API_FILE_ROOT_ORIGINAL}${filename}`,
  imageMedium: (filename: string) => filename?.startsWith('http') ? filename : `${API_FILE_ROOT_MEDIUM}${filename}`,
  imageSmall: (filename: string) => filename?.startsWith('http') ? filename : `${API_FILE_ROOT_SMALL}${filename}`,
}

const henceforthApi = {
  Order,
  Home,
  token,
  Notification,
  Auth,
  Common,
  Coupons,
  WishList,
  Cart,
  Profile,
  Products,
  Review,
  Search,
  API_ROOT,
  API_FILE_ROOT_SMALL,
  API_FILE_ROOT_MEDIUM,
  API_FILE_ROOT_ORIGINAL,
  API_FILE_ROOT_VIDEO,
  API_FILE_ROOT_DOCUMENTS,
  FILES,
  Address,
  Card,
  language,
  encode,
  setToken: (_token?: string) => { token = _token; }
};

export default henceforthApi