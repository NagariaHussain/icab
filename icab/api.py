import frappe

@frappe.whitelist()
def get_money(scale):
    return "💰" * scale
