import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		create(){
			var list = this.store.createRecord("list",{
				title: this.listTitle
			});

			list.save();
		},
		addItem(description, list){
			var item = this.store.createRecord("item",{
				description: description
			});

			list.get("items").then(()=>{
				list.get("items").addObject(item);
				item.save();
				list.save();
			});
		}
	}
});
