import axios from 'axios'

export default function main (){
  axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
}
