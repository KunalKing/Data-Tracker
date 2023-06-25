import './UserForm.css'

const UserForm = () => {
 return (
    <form>
        <div className="new-form__controls">
         <div className="new-form__control">
            <label>Date</label>
            <input type='date'  min='2022-06-25' max='2025-12-31'/>
         </div>
        </div>


        <div className="new-form__controls">
         <div className="new-form__control">
            <label>Data Desc</label>
            <input type='text' />
         </div>
        </div>

        <div className="new-form__controls">
         <div className="new-form__control">
            <label>Tags</label>
            <input type='text' />
         </div>
        </div>

       <div className="Work_Status">
       <input id="toggle-on" name="toggle" type="radio"/>
       <label for="toggle-on">WIP</label>
       <input id="toggle-off" name="toggle" type="radio"/>
       <label for="toggle-off">DONE</label>
       </div>

       <div className = "new-expense__actions">
        <button type="submit">Add Data</button>
       </div>
    </form>
 );
};

export default UserForm;