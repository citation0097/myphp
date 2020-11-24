<?php

$viewType = $viewType ?? '';

?>
<script>
    var g_modat_grid_read_ajax;
    $(function () {
        var modal = $('#add-item-modal').kendowindow({
            width: 
        });

        var grid_init_data = {
            dataSource:{
                transport:{
                    read: function(options){
                        g_modat_grid_read_ajax = $.ajax({
                            url:
                            headers:{

                            },
                            type: 'POST',
                            dataType: 'json',
                            data:
                            contenType:
                            success: function(result){

                            },
                            error: function(result){

                            }
                        });
                    }
                },
                schema
            }
        }
        
    })


</script>

<?

?>