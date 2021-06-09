import { propTypes } from "react-bootstrap/esm/Image";

const Filter=(props)=>{
    const dropdownChangeHandler = (event) =>{
        props.onChangeFilter(event.target.value);
    };
    return(
        <div class="s010">
      <form>
        <div class="inner-form">
          
          <div class="advance-search">
            <div class="row">
              <div class="input-field">
                <div class="input-select">
                  <select  value={propTypes.selected} onChange={dropdownChangeHandler}>
                    <option placeholder="" value="1977">1977</option>
                    <option placeholder="" value="1980">1980</option>
                    <option placeholder="" value="1983">1983</option>
                  </select>
                </div>
              </div>
              
              
            </div>
           
            
          </div>
        </div>
      </form>
    </div>
    )
}
export default Filter;