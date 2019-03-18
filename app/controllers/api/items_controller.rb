class Api::ItemsController < ApplicationController
  before_action :set_menu, only: [:index, :create, :update, :destroy]
  before_action :set_item, only: [:update, :destroy]
  
  def index
    render json: @menu.items
  end

  def create
    item = @menu.items.new(item_params)
    if item.save
      render json: item
    else
      render json: { errors: item.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @item.update
      render json:
    else
      render json:
    end
  end

  def destroy
    @item.destroy
    render json: {message: 'Item Deleted'}
  end

  private
    def item_params
      params.require(:item).permit(:name, :price, :menu_id)
    end

    def set_item
      @item = Item.find(params[:id])
    end

    def set_menu
      @menu = Menu.find(params[:menu_id])
    end


end
