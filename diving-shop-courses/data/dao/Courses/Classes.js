var query = require('db/v3/query');
var daoApi = require('db/v3/dao');
var dao = daoApi.create({
	'table': 'DIVING_SHOP_CLASSES',
	'properties': [
		{
			'name': 'Id',
			'column': 'CLASS_ID',
			'type': 'INTEGER',
			'id': true,
		}, {
			'name': 'Course',
			'column': 'CLASS_COURSE',
			'type': 'INTEGER',
		}, {
			'name': 'StartDate',
			'column': 'CLASS_START_DATE',
			'type': 'DATE',
		}]
});
exports.list = function(settings) {
	return dao.list(settings);
};

exports.get = function(id) {
	return dao.find(id);
};

exports.create = function(entity) {
	return dao.insert(entity);
};

exports.update = function(entity) {
	return dao.update(entity);
};

exports.delete = function(id) {
	dao.remove(id);
};

exports.count = function() {
	return dao.count();
};

exports.customDataCount = function() {
	var resultSet = query.execute("SELECT COUNT(*) AS COUNT FROM DIVING_SHOP_CLASSES");
	return resultSet !== null ? resultSet[0].COUNT : 0;
};