import * as _ from 'lodash'

export const runDebounced = _.debounce((callback) => {

  callback();
}, 250, {leading: true});

export const runDebouncedQuick = _.debounce((callback) => {

  callback();
}, 50, {leading: true});