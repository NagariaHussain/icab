// Copyright (c) 2024, BWH and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Booking", {
	refresh(frm) {
		if (frm.doc.status === "New") {
			frm.add_custom_button("Accept", () => {
				frappe.prompt('Driver', ({value}) => {
					frappe.new_doc("Ride Invoice", {
						"booking": frm.doc.name,
						"driver": value
					})
				});
				frm.save();
			}, "Actions")

			frm.add_custom_button("Reject", () => {
				frm.set_value("status", "Rejected");
				frm.save();
			}, "Actions")
		}
	},
});

