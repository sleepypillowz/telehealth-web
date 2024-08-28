const AddAppointment = () => {
  return (
    <>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl">

            <form>
              <div className="space-y-12">

                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">Add Appointment</h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">Lorem Ipsum</p>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label for="first-name" className="block text-sm font-medium leading-6 text-gray-900">Patient ID</label>
                      <div className="mt-2">
                        <input type="text" name="first-name" id="first-name" autocomplete="given-name" autoFocus></input>
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label for="date" className="block text-sm font-medium leading-6 text-gray-900">Date</label>
                      <div className="mt-2">
                        <input type="date" name="date" id="date" autocomplete="date"></input>
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label for="time" className="block text-sm font-medium leading-6 text-gray-900">Time</label>
                      <div className="mt-2">
                        <input type="time" id="appt" name="appt" placeholder="10:00" required onfocus="this.value='';" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
              </div>
            </form>

          </div>
        </div>
      </div>

    </>
  );
}

export default AddAppointment;
