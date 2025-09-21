// Get Moto
export function getMoto(array, id) {
  const result = array.find(el => el.id === id);
  return result;
};


// Add Moto
export function addMoto(array, newMoto){
    const result = [...array, newMoto]

}


// Delete Moto
export function deleteMoto(array, id){
    const result = array.filter((el)=> el.id !=id);

    return result;
};

// Update Moto
export function updateMOto(array, id, updateMOto){
    const result = array.map((moto)=>{
        if(moto.id===id){
            return updateMOto;
        } else{
            return moto;
        }
    });
    return result
}
