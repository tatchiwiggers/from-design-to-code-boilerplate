  class MoviesController < ApplicationController
  def index
    @movies = Movie.order(year: :desc)

    if params[:query].present?
      @movies = @movies.where('title ILIKE ?', "%#{params[:query]}%")
    end
    
    respond_to do |format|
      format.html # Follow regular flow of Rails
      # dessa forma nosso movies controller vai renderizar somente o partial para os usuarios
      # que tem JS habilitado no navegador. Agora se formos no console percebam que não temos
      # mais head nem meta, somente o partial. e é esse partial que queremos usar pra substituir nossa lista
      # VAMOS VOLTAR NO JS CONTROLLER E FAZER ISSO.
      format.text { render partial: 'movies/list', locals: { movies: @movies }, formats: [:html] }
    end
  end

  def update
    @movie = Movie.find(params[:id])
    @movie.update(movie_params)
  
    # não queremos renderizar a pagina somente o partial do cartãozinho que queremos update
    respond_to do |format|
      format.html { redirect_to movies_path }
      format.text { render partial: 'movies/movie_infos', locals: { movie: @movie }, formats: [:html] }
    end
  end
  
  private
  
  def movie_params
    params.require(:movie).permit(:title, :year)
  end

end
