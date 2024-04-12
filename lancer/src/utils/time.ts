const hour = new Date().getHours();
let message = '';
if (hour < 10) {
  message = '早上好';
} else if (10 <= hour && hour < 14) {
  message = '中午好';
} else if (14 <= hour && hour < 18) {
  message = '下午好';
} else {
  message = '晚上好';
}
export default message;