import {useState} from 'react';

export default function useImmediateState(initialValue){
    const [_state, _setState] = useState({current : initialValue});

    function getState(){
        return _state.current;
    }

    function setState(value){
        _setState({current : value});
        _state.current = value;
    }

    return [getState, setState];
}