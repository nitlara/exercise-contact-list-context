const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: [],
			name: "",
			email: "",
			address: "",
			phone: ""
		},

		actions: {
			getListContacts: () => {
				const store = getStore();
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/alvaro_agenda")
					.then(response => response.json())
					.then(data => {
						setStore({ contacts: data });
					})
					.catch(err => console.log("Request Failed", err));
			},
			addContact: (inputName, inputEmail, inputAddress, inputPhone) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				//console.log(inputName, inputEmail, inputAddress, inputPhone);
				var raw = JSON.stringify({
					full_name: inputName,
					email: inputEmail,
					agenda_slug: "alvaro_agenda",
					address: inputAddress,
					phone: inputPhone
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch("https://assets.breatheco.de/apis/fake/contact/", requestOptions)
					.then(response => response.json())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			},
			removeContact: id => {
				console.log(id);
				fetch(`'https://assets.breatheco.de/apis/fake/contact/agenda/alvaro_agenda/${id}'`, {
					method: "DELETE"
				})
					.then(res => res.json())
					.then(res => console.log(res));
			}
		}
	};
};

export default getState;
