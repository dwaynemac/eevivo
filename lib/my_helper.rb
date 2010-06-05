module MyHelper

  # Generates text_field
  # Options:
  #   - class: includes given classes
  #   - save: autosave on change, default is true.
  def txt(id = nil, options = {})
    extras = ""
    options[:save] = true if options[:save].nil?
    extras << %( class="#{"save-this-data" if options[:save] } #{options[:class]}")
    extras << %( id="#{id}") unless id.nil?
    extras << %( size="#{options[:size]}") unless options[:size].nil?
    
    html = %(<input type="textfield" #{extras}/>)
    html
  end

  def txt_area(id = nil, options = {})
    extras = ""
    options[:save] = true if options[:save].nil?
    extras << %( class="#{"save-this-data" if options[:save] } #{options[:class]}")
    extras << %( id="#{id}") unless id.nil?
    unless options[:size].nil?
      options[:size] =~ /(\d*)x(\d*)/
      extras << %( cols="#{$1}" rows="#{$2}")
    end

    html = %(<textarea #{extras}>#{options[:value]}</textarea>)
    html
  end

  def hdn(id, value = nil, options = {})
    extras = ""
    options[:save] = true if options[:save].nil?
    extras << %( class="#{"save-this-data" if options[:save] } #{options[:class]}")
    extras << %( id="#{id}")

    html = %(<input type="hidden" #{extras} value="#{value}" />)
    html
  end

  def int_select(id, from, to, options = {})
    extras = ""
    options[:save] = true if options[:save].nil?
    extras << %( class="#{"save-this-data" if options[:save] } #{options[:class]}")
    extras << %( id="#{id}") unless id.nil?

    html = %(<select id="#{id}" #{extras}>)
    i = from
    while i <= to do
      if options[:modify].nil?
        text = i
      else
        text = i + options[:modify].to_i
      end
      html << %(<option value="#{i}">#{text}</option>)
      i += 1
    end
    html << "</select>"
    html
  end

  def rank_select(id, options = {})
    extras = ""
    options[:save] = true if options[:save].nil?
    extras << %( class="#{"save-this-data" if options[:save] } #{options[:class]}")
    extras << %( id="#{id}") unless id.nil?

    html = %(
      <select id="#{id}" #{extras}>
        <option value="1">Aspirante</option>
        <option value="2">Sádhaka</option>
        <option value="3">Yôgin</option>
        <option value="4">Chêla</option>
        <option value="5">Graduado</option>
        <option value="6">Asistente</option>
        <option value="7">Docente</option>
        <option value="8">Maestro</option>
      </select>)
    html
  end

end

Webby::Helpers.register(MyHelper)

# EOF