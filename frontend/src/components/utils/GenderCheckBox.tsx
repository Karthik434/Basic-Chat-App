const GenderCheckBox = ({
  selectedGender,
  onCheckBoxChange,
}:{selectedGender : string,
  onCheckBoxChange: (gender:"male"|"female")=>void;
})=>{
  return(
    <div className="flex mt-3">
      <div className="form-control">
        <label className="label gap-1 cursor-pointer">
          <span className="label-text">Male</span>
          <input type="radio" name="radio-4" className="radio radio-primary" checked={selectedGender==="male"}
          onChange={() => onCheckBoxChange("male")}
          value={"male"}/>
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-1 cursor-pointer">
          <span className="label-text ml-3">Female</span>
          <input type="radio" name="radio-4" 
          value={"female"}
          className="radio radio-primary"checked={selectedGender==="female"}
          onChange={() => onCheckBoxChange("female")}/>
        </label>
      </div>
    </div>
  )
}
export default GenderCheckBox