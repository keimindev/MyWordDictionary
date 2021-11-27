import {db} from '../../firebase';
import {
    collection,
    doc,
    getDocs,
    addDoc,                     
    updateDoc,
    deleteDoc,
}from 'firebase/firestore';


const initialState = {
    is_loaded: false,
    list:[]
}

//action 
const LOAD_LIST = 'reducer/LOAD_LIST';
const ADD_WORDS = 'reducer/ADD_WORDS';
const DEL_WORDS = 'reducer/DEL_WORDS';
const EDIT_WORDS = 'reducer/EDIT_WORDS';


//action creator
export const loadWordsList = (words_list) =>{
    return { type: LOAD_LIST, words_list}
}

export const addWordsList = (words_list) => {
    return { type: ADD_WORDS, words_list}
}

export const delWordsList = (word_id) => {
    return { type: DEL_WORDS, word_id}
}

export const editWordsList = (word_id) => {
    return { type: EDIT_WORDS, word_id}
}



//middlewares
export const loadWordsListFB = () => {
    return async function(dispatch){
        const words_data = await getDocs(collection(db, "words_list"));
        
        let list = [];
        words_data.forEach((doc) => {
            list.push({id: doc.id, ...doc.data()})
        })
        dispatch(loadWordsList(list))
    }
}

export const addWordsListFB =( words ) =>{
    return async function(dispatch){
        const docRef = await addDoc(collection(db, "words_list"), words )
        const words_data = {id:docRef.id, ...words};
        dispatch(addWordsList(words_data))
    }
}

export const delWordsListFB =( word_id ) =>{
    return async function(dispatch, getState){
        const docRef = doc(db, "words_list", word_id)
        await deleteDoc(docRef);
        const _words_list = getState().reducer.list;
        const _words_id = _words_list.findIndex((b) =>{

            return b.id === word_id;
        })
   
        dispatch(delWordsList(_words_id))
    }
}


export const editWordsListFB =(word) =>{
    return async function(dispatch, getState){
        const docRef = doc(db, "words_list", word.id)
        await updateDoc(docRef, {word: word.word, meaning: word.meaning, ex: word.ex, index: word.index});
        const _words_list = getState().reducer.list;
        const _words_id = _words_list.findIndex((b) =>{
            return b.id === word.id;
        })
   
        dispatch(editWordsList(_words_id))
    }
}





//reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
     case LOAD_LIST : {
         return {list: action.words_list, is_loaded: true}
     }

     case ADD_WORDS :{
         const new_words_list = [...state.list, action.words_list];
         return { list: new_words_list}
     }
     case DEL_WORDS :{
         return{
         ...state, 
         list: state.list.filter((x, i) => x.id !== action.word_id)
     }}
     
     case EDIT_WORDS : {
         const update_new_word = state.list.map((el, idx) => {
             if(action.word_id === el){
                 return action.word_id
             }else{
                 return el;
             }
            })
              return {...state, list: update_new_word};
     }
     default : return state
  }
}
