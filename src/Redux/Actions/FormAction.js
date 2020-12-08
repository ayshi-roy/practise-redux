import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
export const ON_SUBMIT = 'ON_SUBMIT';
export const REMOVE_DATA = 'REMOVE_DATA';


const MySwal = withReactContent(Swal);

export const onSubmit = (data) => {
    fetch('http://localhost:5000/fillUpData',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if (success){
                MySwal.fire({
                    title: <p>Your Information Submitted Successfully</p>,
                    footer: 'Copyright 2018',
                    didOpen: () => {
                      // `MySwal` is a subclass of `Swal`
                      //   with all the same instance & static methods
                      MySwal.clickConfirm()
                    }
                  }).then(() => {
                    return MySwal.fire(<p>Your Information Submitted Successfully</p>)
                  })
            }
        })
    return {type: ON_SUBMIT, data}
}

export const removeFromData = id => {    
    fetch(`http://localhost:5000/delete/${id}`,{
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(result => {
       if(result){
          alert('result');
       } 
    })   
    return {type: REMOVE_DATA, id}
}