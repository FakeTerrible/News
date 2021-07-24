import { createStore } from "vuex";

const store =  createStore({
    state(){
        return {
            channels:[],
            check:[],
            noCheck:[]
        }
    },
    mutations:{
        muChannels(state, Channels){
            state.channels = Channels;
            state.noCheck = state.channels.filter(item=>state.check.indexOf(item)===-1);
        },
        increment(state,channel){
            state.check.push(channel);
            state.noCheck = state.channels.filter(item=>state.check.indexOf(item)===-1);
        },
        decrement(state,channel){
            state.noCheck.push(channel);
            state.check = state.channels.filter(item=>state.noCheck.indexOf(item)===-1);
        }
    } 
});

export default store;