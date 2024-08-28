const AddPatient = () => {

  return (
    <>
      <div class="bg-white">
        <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div class="mx-auto max-w-2xl">

            <form>
              <div class="space-y-12">

                <div class="border-b border-gray-900/10 pb-12">
                  <h2 class="text-base font-semibold leading-7 text-gray-900">Add Patient</h2>
                  <p class="mt-1 text-sm leading-6 text-gray-600">Lorem Ipsum</p>

                  <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                    <div class="sm:col-span-3">
                      <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                      <div class="mt-2">
                        <input type="text" name="last-name" id="last-name" placeholder="Doe" autocomplete="family-name" required pattern="[A-Za-z]"></input>
                      </div>
                    </div>

                    <div class="sm:col-span-3">
                      <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900" pattern="[A-Za-z]">First name</label>
                      <div class="mt-2">
                        <input type="text" name="first-name" id="first-name" placeholder="John" autocomplete="given-name" autoFocus required></input>
                      </div>
                    </div>

                    <div class="sm:col-span-2">

                      <div class="mt-2">
                        <label for="month" class="block text-sm font-medium leading-6 text-gray-900">Month</label>
                        <input type="number" name="month" placeholder="12" min="1" max="12" required />
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <div class="mt-2">
                        <label for="day" class="block text-sm font-medium leading-6 text-gray-900">Day</label>
                        <input type="number" name="day" placeholder="31" min="1" max="31" required />
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <div class="mt-2">
                        <label for="year" class="block text-sm font-medium leading-6 text-gray-900">Year</label>
                        <input type="number" name="year" placeholder="1900" min="1900" max="9999" required />
                      </div>
                    </div>

                    <div class="col-span-3">
                      <label for="mobile-number" class="block text-sm font-medium leading-6 text-gray-900">Mobile Number</label>
                      <div class="mt-2">
                        <input type="tel" id="phone" name="phone" placeholder="0969123456" pattern="[0-9]{11}" required></input>
                      </div>
                    </div>

                    <div class="sm:col-span-3">
                      <label for="gender" class="block text-sm font-medium leading-6 text-gray-900">Gender</label>
                      <div class="mt-2">
                        <select id="gender" name="gender" autocomplete="gender" class="input">
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                    </div>


                  </div>
                </div>
              </div>

              <div class="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
              </div>
            </form>

          </div>
        </div>
      </div>

    </>
  );
}

export default AddPatient;
