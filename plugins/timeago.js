import Vue from 'vue'
import { format } from 'timeago.js'

Vue.prototype.$timeAgo = time => format(time)
