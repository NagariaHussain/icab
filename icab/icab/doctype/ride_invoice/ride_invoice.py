# Copyright (c) 2024, BWH and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class RideInvoice(Document):
	def before_save(self):
		self.set_total_amount()

	def set_total_amount(self):
		# sum all distances
		total_distance = 0
		for item in self.items:
			total_distance += item.distance

		# multiply by rate and set to total amount
		self.total_amount = total_distance * self.rate_per_km
