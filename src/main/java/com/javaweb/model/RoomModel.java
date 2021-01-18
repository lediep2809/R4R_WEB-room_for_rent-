package com.javaweb.model;

public class RoomModel extends AbstractModel<RoomModel> {
	
	/*private String title;//tÃªn phÃ²ng
	private String thumbnail;//bá»�
	private String shortDescription;// tÃ¬nh trang p
	private String content; // mÃ´ táº£
	private Long categoryId;
	private String categoryCode;
	private String price;
	private String deposit;
	private String adress;
	private String sonha;
	private String tenduong;
	private String dientich;
	private String succhua;
	private Long Gtinh;
	private String name;
	private Long sdt;
	private String priceE;
	private String priceW;
	private String priceOther;
*/
	private String name;
	private String address;
	private String category;
	private String categoryCode;
	private String area;
	private String capacity;
	private String status;
	private String description;
	private String price;
	private String deposit;
	private String electricPrice;
	private String waterPrice;
	private String otherPrice;
	private String houseOwner;
	private String ownerPhone;
	private Long createdBy;
	private String search;

	public String getSearch() {
		return search;
	}

	public void setSearch(String search) {
		this.search = search;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getCategoryCode() {
		return categoryCode;
	}

	public void setCategoryCode(String categoryCode) {
		this.categoryCode = categoryCode;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getCapacity() {
		return capacity;
	}

	public void setCapacity(String capacity) {
		this.capacity = capacity;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getDeposit() {
		return deposit;
	}

	public void setDeposit(String deposit) {
		this.deposit = deposit;
	}

	public String getElectricPrice() {
		return electricPrice;
	}

	public void setElectricPrice(String electricPrice) {
		this.electricPrice = electricPrice;
	}

	public String getWaterPrice() {
		return waterPrice;
	}

	public void setWaterPrice(String waterPrice) {
		this.waterPrice = waterPrice;
	}

	public String getOtherPrice() {
		return otherPrice;
	}

	public void setOtherPrice(String otherPrice) {
		this.otherPrice = otherPrice;
	}

	public String getHouseOwner() {
		return houseOwner;
	}

	public void setHouseOwner(String houseOwner) {
		this.houseOwner = houseOwner;
	}

	public String getOwnerPhone() {
		return ownerPhone;
	}

	public void setOwnerPhone(String ownerPhone) {
		this.ownerPhone = ownerPhone;
	}

	public Long getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(Long createdBy) {
		this.createdBy = createdBy;
	}

	
	
}
