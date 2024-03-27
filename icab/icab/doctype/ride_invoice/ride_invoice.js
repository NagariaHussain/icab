// Copyright (c) 2024, BWH and contributors
// For license information, please see license.txt
frappe.ui.form.on("Ride Invoice", {
	rate_per_km(frm) {
		let total_distance = 0
		for (let item of frm.doc.items) {
			total_distance += item.distance
		}

		frm.set_value("total_amount", frm.doc.rate_per_km * total_distance)
	}
})

frappe.ui.form.on("Ride Invoice Item", {
	distance(frm, cdt, cdn) {
		let total_distance = 0
		for (let item of frm.doc.items) {
			total_distance += item.distance
		}

		frm.set_value("total_amount", frm.doc.rate_per_km * total_distance)
	},
});
