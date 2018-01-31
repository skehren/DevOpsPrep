// Javascript skeleton.
// Edit and adapt to your needs.
// The documentation of the NeoLoad Javascript API
// is available in the appendix of the documentation.

// Get variable value from VariableManager
var item = context.variableManager.getValue("nl_extracted_param_1");
var timestamp = context.variableManager.getValue("Ex18_CurrentDate");
if (item==null) {
        context.fail("Variable 'nl_extracted_param_1' not found");
}

logger.debug("It is "+timestamp+" on LG "+context.currentLG.name+" and the item is "+item);